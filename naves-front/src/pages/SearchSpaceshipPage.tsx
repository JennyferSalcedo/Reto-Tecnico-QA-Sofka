import { useState } from 'react';
import { useFetch } from '../hooks';
import { GridSpaceships } from '../components';


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
    setInputValue('');
  };


  return (
    <div className="searchContainer">
      <form onSubmit={onSubmit} aria-label="form">
        <input
          type="text"
          placeholder="Busca tus naves. Escribe un nombre, ejemplo: Saturno V"
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
