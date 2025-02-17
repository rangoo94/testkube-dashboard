import {TestExecutor, TestExecutorConfig, TestExecutorName} from '@models/testExecutors';

const defaultTestExecutorConfig: TestExecutorConfig = {
  canHaveArtifacts: false,
};

const cypressTestExecutorConfig: TestExecutorConfig = {
  canHaveArtifacts: true,
};

const soapuiTestExecutorConfig: TestExecutorConfig = {
  canHaveArtifacts: true,
};

export const testExecutorsConfigs: Partial<Record<TestExecutor, TestExecutorConfig>> = {
  'cypress/project': cypressTestExecutorConfig,
  'soapui/xml': soapuiTestExecutorConfig,
  unknown: defaultTestExecutorConfig,
};

export const testExecutorsNames: Record<TestExecutor, TestExecutorName> = {
  'postman/collection': 'Postman',
  'postman/custom': 'Postman',
  'cypress/project': 'Cypress',
  'curl/test': 'Curl',
  'test/curl': 'Curl',
  'k6/script': 'K6',
  'soapui/xml': 'SoapUI',
  'artillery/test': 'Artillery',
  'gradle/test': 'Gradle',
  'gradle:jdk18/test': 'Gradle 18',
  'maven:jdk18/test': 'Gradle 18',
  'maven/test': 'Maven',
  'kubepug/yaml': 'Kubepug',
  'ginkgo/test': 'Ginkgo',
  'jmeter/test': 'JMeter',
  unknown: 'Unknown test type',
};
