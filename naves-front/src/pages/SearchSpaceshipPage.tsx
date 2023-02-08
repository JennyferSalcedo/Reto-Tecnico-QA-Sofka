import { useState } from 'react';

// interface Props {
//   onNewSpaceship: (value: string) => void;
// }

export const SearchSpaceshipPage = () => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }: any) => {
    setInputValue(target.value);
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // onNewSpaceship(inputValue.trim());
    setInputValue('');
  };
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Busca tus naves"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
