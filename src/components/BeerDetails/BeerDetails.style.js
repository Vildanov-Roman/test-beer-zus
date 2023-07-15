import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieLink = styled(Link)`
  width: 80px;
  color:darkseagreen;
  text-align: center;
  padding: 5px;
  background: rgba(129, 129, 129, 0.119);


  border: 1px solid black;

  position: absolute;
  left: 20px;

`

export const WrapTitle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

`

export const WrapDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 25%;
`
