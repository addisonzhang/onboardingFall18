import styled from 'styled-components'

export const Title = styled.div`
  font-family: ${({theme}) => theme.font.family};
  font-size: 30px; 
  padding: 1em 1em 0.5em 1em;
  /* background-color: coral;
  color: white; 
  
  
  font-weight: 300; 
  line-height: 58px;  */
  /* color: ${({theme}) => theme.colors.text};
  background-color: ${({theme}) => theme.colors.background};
  font-family: ${({theme}) => theme.font.family};
  font-size: 30px; */
  /* text-align: center;
  margin: auto;
  padding: 1em; */
`;

export const Text = styled.p`
  /* color: ${({theme}) => theme.colors.text};
  background-color: ${({theme}) => theme.colors.background}; */
  font-family: ${({theme}) => theme.font.family};
  padding: 0em 1em 1em 2em
  font-size: 15px;
  /* text-align: center;
  margin: auto;
  padding: 0em 1em 1em 1em; */
`;

export const Box = styled.div`
    height: 80vh;
    width: 80vw;
    background-color: white;
    box-shadow: 3px 3px 3px black;
    display: flex;
`;

export const SmallBox = styled.div`
    width: 50%;
    background-color: grey;
`;

export const SmallBox2 = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const theme = {
    colors: {
      background: 'HotPink',
      text: 'white'
    },
    font: {
        family: "Chalkduster, fantas"
    },
    fonts: {
      primary: {
        family: 'Source Sans Pro, sans-serif',
        weight: 400,
      },
    },
  }
  
