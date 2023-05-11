import {Branch, Path} from '@molecules';

import {StyledFormSpace} from '../TestConfigurationForm.styled';
import {Props} from '../utils';

const CustomFormFields: React.FC<Partial<Props>> = props => {
  const {executorType} = props as Pick<Props, 'executorType'>;

  return (
    <StyledFormSpace size={24} direction="vertical">
      <Branch />
      <Path testType={executorType} />
    </StyledFormSpace>
  );
};

export default CustomFormFields;
