import { ChangeEvent, useState } from 'react';

export const useInputHook = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    bind: {
      value,
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        console.log('value', event.target.value);
        setValue(event.target.value);
      }
    }
  };
};
