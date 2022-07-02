import styled from 'styled-components';

export const FileButton = styled.button`
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 0;
  border: none;
  align-items: center;
  
  ${props => {
    if (props.uploadType==='image') {
      return `
        height: 138px;
        width: 138px;
        border-radius: 100px;
        box-shadow: inset -1px 2px 4px rgba(0, 0, 0, 0.25);
        font-weight: normal;
        color: #525252;
        padding: 0 10px;
        font-size: 16px;
        line-height: 20px;
        background-color: #ffffff;
      `
    } else if (props.uploadType==='pdf') {
      return `
        height: 60px;
        border-radius: 20px;
        box-shadow: inset 4px -4px 4px 0 #38008040, inset -3px 3px 4px 0 #ab69ff;
        padding: 10px 30px;
        text-transform: none;
        color: white;
        text-align: center;
        background-color: #7000ff;
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `
    }
  }}
`;