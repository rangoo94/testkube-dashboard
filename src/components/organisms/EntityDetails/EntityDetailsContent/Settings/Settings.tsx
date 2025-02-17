import React, {FC, ReactElement, useCallback, useContext} from 'react';

import {EntityDetailsContext} from '@contexts';

import {Entity} from '@models/entity';

import {SettingsLayout} from '@molecules';

import SettingsDefinition from './SettingsDefinition/SettingsDefinition';
import SettingsExecution from './SettingsExecution';
import General from './SettingsGeneral';
import SettingsScheduling from './SettingsScheduling';
import SettingsTest from './SettingsTest';
import SettingsTests from './SettingsTests';
import SettingsVariables from './SettingsVariables';

const testSettings = (
  <SettingsLayout
    tabs={[
      {id: 'general', label: 'General', children: <General />},
      {id: 'test', label: 'Test', children: <SettingsTest />},
      {id: 'execution', label: 'Execution', children: <SettingsExecution />},
      {id: 'variables', label: 'Variables & Secrets', children: <SettingsVariables />},
      {id: 'scheduling', label: 'Scheduling', children: <SettingsScheduling />},
      {id: 'definition', label: 'Definition', children: <SettingsDefinition />},
    ]}
  />
);

const WrappedSettingsTests: FC<{setId(id: string): void}> = ({setId}) => (
  <SettingsTests openDefinition={useCallback(() => setId('definition'), [])} />
);

const testSuiteSettings = (
  <SettingsLayout
    tabs={[
      {id: 'general', label: 'General', children: <General />},
      {id: 'tests', label: 'Tests', children: WrappedSettingsTests},
      {id: 'variables', label: 'Variables & Secrets', children: <SettingsVariables />},
      {id: 'scheduling', label: 'Scheduling', children: <SettingsScheduling />},
      {id: 'definition', label: 'Definition', children: <SettingsDefinition />},
    ]}
  />
);

const tabsConfigMap: Record<Entity, ReactElement<any, any>> = {
  'test-suites': testSuiteSettings,
  tests: testSettings,
};

const Settings: React.FC = () => {
  const {entity} = useContext(EntityDetailsContext);
  return tabsConfigMap[entity];
};

export default Settings;
