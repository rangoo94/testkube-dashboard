import {useCallback, useContext} from 'react';

import notFoundImage from '@assets/not-found-image.svg';

import {ExternalLink} from '@atoms';

import {ConfigContext, DashboardContext} from '@contexts';

import {Button, Title} from '@custom-antd';

import Colors from '@styles/Colors';

import {StyledErrorContainer, StyledErrorDescription, StyledErrorImage} from './ErrorBoundary.styled';

const ErrorBoundaryFallback: React.FC = () => {
  const {navigate} = useContext(DashboardContext);
  const {discordUrl} = useContext(ConfigContext);

  const onButtonClick = useCallback(() => {
    navigate('/tests');
  }, []);

  return (
    <StyledErrorContainer size={32}>
      <StyledErrorImage src={notFoundImage} preview={false} />
      <Title level={2} color={Colors.whitePure}>
        An unexpected error occurred
      </Title>
      <StyledErrorDescription>
        We were notified about your error and will make sure to fix it as soon as possible. In the mean time you can try
        refreshing this page.
      </StyledErrorDescription>
      <StyledErrorDescription>
        Feel free to reach out to us on <ExternalLink href={discordUrl}>Discord</ExternalLink> if the error continuous
        to exist.
      </StyledErrorDescription>
      <Button type="primary" onClick={onButtonClick}>
        Back to the Dashboard
      </Button>
    </StyledErrorContainer>
  );
};

export default ErrorBoundaryFallback;
