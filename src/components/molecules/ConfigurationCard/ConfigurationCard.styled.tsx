import styled from 'styled-components';

import Colors from '@styles/Colors';

export const StyledContainer = styled.div<{isWarning?: boolean}>`
  display: flex;
  flex-direction: column;

  width: 100%;
  border: 1px solid ${props => (props.isWarning ? Colors.pink600 : Colors.slate800)};
  border-radius: 4px;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 20px;
  border-bottom: 1px solid ${Colors.slate800};
`;

export const StyledChildren = styled.div<{$isActionsVisible: boolean}>`
  padding: 20px;

  ${({$isActionsVisible}) => (!$isActionsVisible ? 'cursor: not-allowed' : '')}
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  padding: 20px;
  border-top: 1px solid ${Colors.slate800};
`;

export const StyledFooterButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const StyledFooterText = styled.div`
  flex: 1;

  margin: auto;
  margin-right: 20px;
`;

export const StyledNotificationContainer = styled.div`
  padding: 20px 20px 0;
`;

// height calculated to contain 3 min height notifications
export const StyledErrorsContainer = styled.div`
  max-height: 240px;

  overflow-y: auto;
`;
