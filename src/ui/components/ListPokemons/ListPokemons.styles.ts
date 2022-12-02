import styled from 'styled-components';

const ListPokemonsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: calc(100% - 3px);
width: 100%;
height: calc(90vh - 40px);
color: #454438;
background-color: #C1B49C;
border-left: 1px solid #454438;
border-right: 1px solid #454438;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
.logo {
  margin-top: 10px;
}
.pokemon-container {
 max-width: 940px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px 20px; 
}
.MuiButtonBase-root {
  font-size: 1.2rem;
}
.MuiSvgIcon-root {
  font-size: 2rem;
}
`;

export default ListPokemonsWrapper;
