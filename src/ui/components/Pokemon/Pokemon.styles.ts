import styled from 'styled-components';

const PokemonWrapper = styled.div`
width: 300px;
height: 250px;
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
.image-container img {
  height: 150px;
  width: auto;
}
a {
  color: inherit;
  text-decoration: inherit;
}
p {
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
}
p span {
  font-weight: 700;
}

`;

export default PokemonWrapper;
