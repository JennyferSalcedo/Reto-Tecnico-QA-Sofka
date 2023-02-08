import { useState } from 'react';
import { useFetch } from '../hooks';
import { GridSpaceships } from '../components';

// interface Props {
//   onNewSpaceship: (value: string) => void;
// }

export const SearchSpaceshipPage = () => {
  const [inputValue, setInputValue] = useState('');
  const baseURL = `http://localhost:8080/v1/api/spaceships/filter?name=${inputValue.trim()}`;
  const { data = [], getFetch } = useFetch(baseURL);

  const onInputChange = ({ target }: any) => {
    setInputValue(target.value);
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    console.log('inputValue', inputValue);
    getFetch();
    // onNewSpaceship(inputValue.trim());
    setInputValue('');
  };

  // console.log('data', data)

  return (
    <div className="searchContainer">
      <form onSubmit={onSubmit} aria-label="form">
        <input
          type="text"
          placeholder="Busca tus naves"
          value={inputValue}
          onChange={onInputChange}
          className="searchInput"
        />
        {/* <button type="submit" className="button">
          Buscar nave
        </button> */}
      </form>
      {data && <GridSpaceships data={data} />}
    </div>
  );
};
