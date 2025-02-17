import {useState} from 'react';

import {Form, Input} from 'antd';

import {ExternalLink} from '@atoms';

import {FormItem, FullWidthSpace, Text} from '@custom-antd';

import {ConfigurationCard, notificationCall} from '@molecules';

import {isApiEndpointLocked, useApiEndpoint, useUpdateApiEndpoint} from '@services/apiEndpoint';

import Colors from '@styles/Colors';

import {externalLinks} from '@utils/externalLinks';

type ApiEndpointFormValues = {
  endpoint: string;
};

const ApiEndpoint: React.FC = () => {
  const [form] = Form.useForm<ApiEndpointFormValues>();

  const [isLoading, setIsLoading] = useState(false);

  const apiEndpoint = useApiEndpoint();
  const updateApiEndpoint = useUpdateApiEndpoint();
  const disabled = isApiEndpointLocked();

  const checkApiEndpoint = async (endpoint: string) => {
    try {
      if (await updateApiEndpoint(endpoint)) {
        setTimeout(() => {
          notificationCall('passed', 'API endpoint set up successfully');
          form.resetFields();
        });
      }
    } catch (error) {
      notificationCall('failed', 'Could not receive data from the specified API endpoint');
    } finally {
      setIsLoading(false);
    }
  };

  const onSave = (values: ApiEndpointFormValues) => {
    setIsLoading(true);
    checkApiEndpoint(values.endpoint);
  };

  return (
    <Form
      form={form}
      onFinish={onSave}
      name="global-settings-api-endpoint"
      initialValues={{endpoint: apiEndpoint}}
      disabled={disabled}
    >
      <ConfigurationCard
        title="Testkube API endpoint"
        description="Please provide the TestKube API endpoint for your installation. The endpoint needs to be accessible from your browser"
        footerText={
          <Text className="regular middle" color={`${Colors.slate400}`}>
            Learn more about{' '}
            <ExternalLink href={externalLinks.dashboardNotWorking}>testkube API endpoints</ExternalLink>
          </Text>
        }
        onConfirm={() => {
          form.submit();
        }}
        onCancel={() => {
          form.resetFields();
        }}
        confirmButtonText={isLoading ? 'Loading...' : 'Save'}
        enabled={!disabled}
      >
        <FullWidthSpace size={32} direction="vertical">
          <FormItem name="endpoint">
            <Input placeholder="Endpoint" />
          </FormItem>
        </FullWidthSpace>
      </ConfigurationCard>
    </Form>
  );
};

export default ApiEndpoint;
