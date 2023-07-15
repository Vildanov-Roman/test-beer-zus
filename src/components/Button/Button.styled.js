import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
  min-width: 180px;
  &:hover {
    border: 2px solid #799be6;
    color: black;;
  &:active {
    background-color: #a7c8cf;
    transform: translateY(4px);
  }`;
