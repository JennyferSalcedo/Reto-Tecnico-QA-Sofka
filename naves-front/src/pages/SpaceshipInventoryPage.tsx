import { spaceshipApi } from '../api/spaceshipApi';
import { Card } from '../components';
import { useFetch } from '../hooks/useFetch';
import { SpaceshipResponse } from '../interfaces/spaceships-response-interface';

export const SpaceshipInventoryPage = () => {
  const baseURL = 'http://localhost:8080/v1/api/spaceships';

  const { data = [] } = useFetch(baseURL);
  // const resp = spaceshipApi.get('http://localhost:8080/v1/api/spaceships')
  // console.log(resp)

  return (
    <div className="container">
      <h1>Tus naves:</h1>
      <hr />

      <div className="container">
        <div className="row">
          {data?.map((spaceship: SpaceshipResponse) => (
            <Card key={spaceship.id} {...spaceship} />
          ))}
        </div>
      </div>

      {/* <p>{JSON.stringify(data, null, 5)}</p> */}
    </div>
  );
};
