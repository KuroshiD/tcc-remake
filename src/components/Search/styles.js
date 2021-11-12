import styled from 'styled-components';
import img from '../../assets/img/search-background.jpg'
import { FaSearch } from 'react-icons/fa'

export const Container = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vw;
  background-blend-mode: color-dodge;
  background-color: rgba(0, 0, 0, .5);
  filter: grayscale(1);
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out .3s;
  
  @media (min-width: 768px) {
    height: 350px;
  }

`;

export const Form = styled.form`

  width: 25%;
  height: 40px;
  position: relative;

  > input {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    padding: 0 41px 0 10px;
    border: none;
    outline: none;
  }

`

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  height: 40px;
  width: 40px;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border-left: 1px solid var(--gray);
  padding: 0 10px;
  flex-shrink: 0;
`
