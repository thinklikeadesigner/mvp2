import styled from 'styled-components/macro';

export const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const ShowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border: none;
  border-radius: 20px;
  margin: 20px 20px 0 0;
  padding: 15px 30px;
  background: #7000ff;
  box-shadow: 4px -4px 4px 0px #38008066 inset;
  box-shadow: -3px 3px 4px 0px #ab69ff inset;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  position: relative;
  &:hover {
    cursor: pointer;
    background: #580abc;
    transition: background 0.3s;
  }
`;
