import styled from 'styled-components';

const PokemonDescriptionWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: calc(100% - 3px);
width: 100%;
height: calc(90vh - 40px);
color: #454438;
background-color: #C1B49C;
border-left: 1px solid #454438;
border-right: 1px solid #454438;
overflow-y: auto;
.image-container {
  width: 500px;
  height: auto;
}
.image-container img {
  width: 500px;
  height: auto;
}

.text-container {
  display: flex;
  flex-direction: row;
  max-width: 960px;
  justify-content: center;
  gap: 20px;
}
.content {
  width: 300px;
}
.abilities p{
  font-weight: 700;
}
p {
  margin: 10px 0;
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
}
p span {
  font-weight: 700;
}
`;

export default PokemonDescriptionWrapper;
