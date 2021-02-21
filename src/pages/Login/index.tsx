import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Link to="/login/criar">Cadastrar</Link>
    </Container>
  );
};

export default Login;
