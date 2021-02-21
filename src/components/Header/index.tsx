import React from 'react';
import { Link } from 'react-router-dom';
import { Container, LinkNav } from './styles';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <nav className="container">
        <Link to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <LinkNav to="/login">Login / Criar</LinkNav>
      </nav>
    </Container>
  );
};

export default Header;
