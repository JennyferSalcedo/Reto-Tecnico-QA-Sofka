import { GridSpaceships } from '../components';
import { useFetch } from '../hooks/useFetch';

export const SpaceshipInventoryPage = () => {
  const baseURL = 'http://localhost:8080/v1/api/spaceships';

  const { data = [] } = useFetch(baseURL);

  return (
    <div className="inventoryContainer">
      <h1 className='inventoryTitle'>Tus naves:</h1>
      <hr className='inventoryTitle' />
      <GridSpaceships data={data} />
    </div>
  );
};
