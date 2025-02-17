import {useCallback, useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {Tabs} from 'antd';

import {DashboardContext, MainContext} from '@contexts';

import {PageHeader, PageWrapper} from '@organisms';

import PageMetadata from '@pages/PageMetadata';

import {useAppSelector} from '@redux/hooks';
import {selectCurrentExecutor, setCurrentExecutor, setExecutorData} from '@redux/reducers/executorsSlice';

import {useGetExecutorDetailsQuery} from '@services/executors';

import {safeRefetch} from '@utils/fetchUtils';

import ExecutorSettings from './ExecutorSettings';

const ExecutorDetails: React.FC = () => {
  const {dispatch, isClusterAvailable} = useContext(MainContext);
  const {navigate} = useContext(DashboardContext);
  const {id: name} = useParams() as {id: string};

  const currentExecutorDetails = useAppSelector(selectCurrentExecutor);

  const [activeTabKey, setActiveTabKey] = useState('Settings');

  const {data: executor, refetch} = useGetExecutorDetailsQuery(name, {skip: !isClusterAvailable});
  const reload = useCallback(() => safeRefetch(refetch), [refetch]);

  const isPageDisabled = !name;

  useEffect(() => {
    dispatch(setCurrentExecutor(name));
    reload();
  }, [name]);

  useEffect(() => {
    if (executor) {
      dispatch(setExecutorData({name, executor}));
    }
  }, [executor]);

  return (
    <PageWrapper>
      <PageMetadata title={`${name} | Executors`} />

      <PageHeader onBack={() => navigate('/executors')} title={name} />
      <Tabs
        activeKey={activeTabKey}
        onChange={setActiveTabKey}
        destroyInactiveTabPane
        items={[
          {
            key: 'Settings',
            label: 'Settings',
            disabled: isPageDisabled,
            children: currentExecutorDetails ? <ExecutorSettings reload={reload} /> : null,
          },
        ]}
      />
    </PageWrapper>
  );
};

export default ExecutorDetails;
