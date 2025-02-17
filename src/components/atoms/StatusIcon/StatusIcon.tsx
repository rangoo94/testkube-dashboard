import {Icon} from '@atoms';

import Colors from '@styles/Colors';

import {IconProps} from '../Icon/types';

import {StyledStatusIcon} from './StatusIcon.styled';

interface IconStyle {
  borderColor: Colors;
  background: Colors;
  color?: Colors;
}

const iconStyles: Record<string, IconStyle> = {
  failed: {
    borderColor: Colors.pink600,
    background: Colors.pink900,
  },
  error: {
    borderColor: Colors.pink600,
    background: Colors.pink900,
  },
  passed: {
    borderColor: Colors.lime600,
    background: Colors.lime900,
  },
  success: {
    borderColor: Colors.lime600,
    background: Colors.lime900,
  },
  running: {
    borderColor: Colors.sky600,
    background: Colors.sky900,
  },
  pending: {
    borderColor: Colors.slate600,
    background: Colors.slate700,
    color: Colors.slate400,
  },
  queued: {
    borderColor: Colors.slate600,
    background: Colors.slate900,
  },
  cancelled: {
    borderColor: Colors.pink600,
    background: Colors.pink900,
  },
  timeout: {
    borderColor: Colors.pink600,
    background: Colors.pink900,
  },
  aborted: {
    borderColor: Colors.pink600,
    background: Colors.pink900,
  },
  aborting: {
    borderColor: Colors.pink600,
    background: Colors.pink900,
  },
};

type StatusIconProps = {
  status: IconProps['name'];
};

const StatusIcon: React.FC<StatusIconProps> = props => {
  const {status} = props;

  return (
    <StyledStatusIcon style={iconStyles[status]}>
      <Icon name={status} />
    </StyledStatusIcon>
  );
};

export default StatusIcon;
