import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  position: relative;
  display: grid;
  margin-left: -10px;
  margin-bottom: 10px;
  padding: 60px 10px 10px;

  transition: box-shadow .5s linear,border .5s linear,background-color .5s linear,transform .3s linear;
  box-shadow: 1px 0 3px 3px rgba(0,0,0,.7);

  &:hover {
    ransform: scale(1.03);
    box-shadow: 5px 5px 17px 7px #2d2d2d
  }
`;

export const ImgBox = styled.div`
  width: 132px;
  margin-right: 20px;
`;

export const Img = styled.img`
  display: block;
  width: 260px;
  height: 260px;
  object-fit: contain;

`;

export const About = styled.p`
margin-bottom: 10px;
`;

export const Pier = styled.p`
  font-family: "Rage Italic";
`;

export const MovieLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

`;

export const ItemAbout = styled.div`
  border-radius: 0 0 4px 4px;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  display: flex;

`;

export const ItemImg = styled.div`
  border-radius: 0 0 4px 4px;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;

`;

export const Btn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
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
`;






