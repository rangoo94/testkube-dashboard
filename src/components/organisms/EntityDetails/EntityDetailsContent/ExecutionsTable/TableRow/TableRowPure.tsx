import React, {memo, useCallback, useMemo} from 'react';

import {Tooltip} from 'antd';

import {StatusIcon} from '@atoms';

import {Text} from '@custom-antd';

import useIsRunning from '@hooks/useIsRunning';

import {DotsDropdown} from '@molecules';

import Colors from '@styles/Colors';

import {displayTimeBetweenDates} from '@utils/displayTimeBetweenDates';
import {formatDuration, formatExecutionDate} from '@utils/formatDate';

import {DetailsWrapper, DotsWrapper, ItemColumn, ItemRow, ItemWrapper, StatusText} from './TableRow.styled';

const TableRowPure: React.FC<{data: any; onAbortExecution: any; mayManageExecution: boolean}> = memo(props => {
  const {data, onAbortExecution, mayManageExecution} = props;
  const {status, number, startTime, name, id, durationMs} = data;

  const isRunning = useIsRunning(status);

  const abortExecution = useCallback(() => {
    if (onAbortExecution) {
      onAbortExecution(id);
    }
  }, [onAbortExecution, id]);

  const renderExecutionActions = () => {
    let actionsArray = [];

    if (isRunning) {
      actionsArray.push({key: 1, label: <span onClick={abortExecution}>Abort execution</span>});
    }

    return actionsArray;
  };

  const renderedExecutionActions = useMemo(() => {
    return renderExecutionActions();
  }, [isRunning]);

  return (
    <ItemWrapper key={id}>
      <StatusIcon status={status} />
      <DetailsWrapper>
        <ItemRow $flex={1}>
          <ItemColumn>
            <Text className="regular big" color={Colors.slate300}>
              {name}
            </Text>
          </ItemColumn>
          <ItemColumn>
            <StatusText className="regular small" color={Colors.slate200} $isRunning={isRunning}>
              {durationMs ? formatDuration(durationMs / 1000) : isRunning ? 'Running' : 'No data'}
            </StatusText>
            {renderedExecutionActions && renderedExecutionActions.length && mayManageExecution ? (
              <DotsWrapper
                onClick={e => {
                  e.stopPropagation();
                }}
              >
                <DotsDropdown items={renderedExecutionActions} withPadding={false} />
              </DotsWrapper>
            ) : null}
          </ItemColumn>
        </ItemRow>
        <ItemRow $flex={1}>
          <ItemColumn>
            {number ? <Text color={Colors.slate400}>#{number}</Text> : null}
            <Text color={Colors.slate400}>Executed:</Text>
            <Tooltip
              overlay={<>{formatExecutionDate(new Date(startTime))}</>}
              placement="bottomRight"
              mouseEnterDelay={0.39}
              mouseLeaveDelay={0.1}
            >
              <Text color={Colors.slate400} className="regular small">
                {displayTimeBetweenDates(new Date(), new Date(startTime)).long}
              </Text>
            </Tooltip>
          </ItemColumn>
        </ItemRow>
      </DetailsWrapper>
    </ItemWrapper>
  );
});

export default TableRowPure;
