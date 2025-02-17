import React, {FC, memo} from 'react';
import {useInterval, useUpdate} from 'react-use';

import {Tooltip} from 'antd';

import {Text} from '@custom-antd';

import Colors from '@styles/Colors';

import {displayTimeBetweenDates} from '@utils/displayTimeBetweenDates';
import {formatExecutionDate} from '@utils/formatDate';

const SECOND = 1000;
const MINUTE = 60 * SECOND;

const TimeAgo: FC<{time: Date | string}> = ({time}) => {
  const now = new Date();
  const then = new Date(time);

  const update = useUpdate();
  useInterval(update, now.getTime() - then.getTime() > 10 * MINUTE ? MINUTE : 5 * SECOND);

  return <>{displayTimeBetweenDates(now, then).long}</>;
};

const EntityGridItemExecutionTime: FC<{time?: Date | string}> = ({time}) => (
  <Tooltip
    title={time ? formatExecutionDate(new Date(time)) : null}
    placement="bottomRight"
    mouseEnterDelay={0.39}
    mouseLeaveDelay={0.1}
  >
    <Text color={Colors.slate200} className="regular small">
      {time ? <TimeAgo time={time} /> : null}
    </Text>
  </Tooltip>
);

export default memo(EntityGridItemExecutionTime);
