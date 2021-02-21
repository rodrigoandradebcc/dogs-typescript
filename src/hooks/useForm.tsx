import React, { ChangeEvent, useState } from 'react';

const useForm: React.FC = (): any => {
  const [value, setValue] = useState('');

  function onChange({ target }: ChangeEvent<HTMLInputElement>): void {
    setValue(target.value);
  }

  return { value, setValue, onChange };
};

export default useForm;
