import styled from 'styled-components';
import { Link } from 'react-router-dom';
import usuario from '../../assets/usuario.svg';

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  width: 100%;
  position: fixed;
  z-index: 100; //faz a nav ficar por ccima dos items
  background: white;
  top: 0px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;

    a {
      text-decoration: none;
    }
  }
`;

export const LinkNav = styled(Link)`
  & {
    color: #333;
    display: flex;
    align-items: center;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;

    background: url('${usuario}') no-repeat center center;

    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;
