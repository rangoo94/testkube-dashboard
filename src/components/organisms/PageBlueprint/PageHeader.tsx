import React, {FC, ReactNode, memo} from 'react';

import {LoadingOutlined} from '@ant-design/icons';
import {PageHeaderProps as AntdPageHeaderProps} from 'antd';

import {FullWidthSpace, Text} from '@custom-antd';

import Colors from '@styles/Colors';

import {StyledPageHeader} from './PageBlueprint.styled';

type PageHeaderProps = {
  description?: ReactNode;
  loading?: boolean;
} & AntdPageHeaderProps;

const PageHeader: FC<PageHeaderProps> = ({title, description, loading, children, ...props}) => (
  <StyledPageHeader
    {...props}
    title={
      loading ? (
        <>
          {title} <LoadingOutlined />
        </>
      ) : (
        title
      )
    }
  >
    {React.Children.count(children) > 0 || description ? (
      <FullWidthSpace direction="vertical" size={15}>
        {description ? (
          <Text className="regular middle" color={Colors.slate400}>
            {description}
          </Text>
        ) : null}
        {children}
      </FullWidthSpace>
    ) : null}
  </StyledPageHeader>
);

export default memo(PageHeader);
