import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
      <p className="error">Error</p>
    </Container>
  );
};

export default Input;
