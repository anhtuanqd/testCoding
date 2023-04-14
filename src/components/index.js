import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectLoading } from './store/slice';
import { useEffect } from 'react';
import { getPage } from './store/thunk';
import { Table } from './Table';
import { Header } from './Header';

export const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(
      getPage({
        pageSize: 100,
      })
    );
  }, []);

  if (isLoading) return <></>;

  return (
    <div style={{ height: '100vh', backgroundColor: '#ccc' }}>
      <Header data={data} />
      <Table data={data} />
    </div>
  );
};
