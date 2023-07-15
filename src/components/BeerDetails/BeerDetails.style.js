import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`

export const BackLink = styled(Link)`
  position: absolute;
  right: 20px;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #3f51b5;
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  &:hover {
    background-color: #799be6;
    color: black;
  };

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
