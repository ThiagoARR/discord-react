import styled from 'styled-components'
import {Add} from 'styled-icons/material';
import {ExpandMore} from 'styled-icons/material';

export const ServerInfo = styled.div`
    grid-area: SI;
    display: flex;
    flex-direction: column;
    padding: 0px 9.5px 0 9.5px;
    background-color: #2f3136;
    overflow-y: scroll;

    ::-webkit-scrollbar{
      display:none;
    }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  margin-top: 24px;
  cursor:pointer;
  
  > span {
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 800;
    color: gray;
    &:hover{
      color: white;
    }
   
  }
`;

export const AddCategoryIcon = styled(Add)`
width: 21px;
height: 21px;
color: #74777a;
cursor: pointer;
`;

export const ExpandIcon = styled(ExpandMore)`
    width: 16px;
    height: 16px;
    cursor: pointer;
    color: #74777a;
    margin: auto;
`;

export const UserInput = styled.input`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 7px;
    border-radius: 3px;
    cursor:pointer; 
    background-color: rgb(32,34,37);
    color: #828386;
`;