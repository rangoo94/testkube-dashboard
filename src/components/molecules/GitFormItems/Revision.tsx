import {useState} from 'react';
import {useFirstMountState} from 'react-use';

import {FormItem} from '@custom-antd';

import {StyledFormSpace} from '../../organisms/TestConfigurationForm/TestConfigurationForm.styled';

import {TooltipStatus} from './tooltipUtils';

import {Branch, Commit, RevisionSwitcher} from '.';

type RevisionProps = {
  message?: string;
  branchStatus?: TooltipStatus;
  commitStatus?: TooltipStatus;
};

const Revision: React.FC<RevisionProps> = props => {
  const {message, branchStatus, commitStatus} = props;
  const [switcherValue, setSwitcherValue] = useState<string | number>('branch');

  const isFirst = useFirstMountState();

  return (
    <FormItem noStyle shouldUpdate>
      {({getFieldValue}) => {
        const commit = getFieldValue('commit');

        if (isFirst) {
          setSwitcherValue(commit ? 'commit' : 'branch');
        }

        return (
          <StyledFormSpace size={24} direction="vertical">
            <RevisionSwitcher value={switcherValue} onChange={setSwitcherValue} />
            {switcherValue === 'branch' ? (
              <Branch message={message} status={branchStatus} />
            ) : (
              <Commit message={message} status={commitStatus} />
            )}
          </StyledFormSpace>
        );
      }}
    </FormItem>
  );
};

export default Revision;
