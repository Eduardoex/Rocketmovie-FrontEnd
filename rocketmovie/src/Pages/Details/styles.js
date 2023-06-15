import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 105px auto;
grid-template-areas: 
"header"
"content";


> main {
  grid-area: content;
  overflow-y: auto;
  padding: 61px 0;
}
;


`;

export const Links = styled.ul`
list-style: none;

> li {
  margin-top: 12px;


  a {
    color: ${({ theme }) => theme.COLORS.WHITE}
  }
}

`

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > h1{
    padding-top: 24px;
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;

    > svg {
    color: ${({ theme }) => theme.COLORS.SALMON};
    
    }
  }

  > p {
    font-size: 16px;
    line-height: 21px; 
    padding-top: 24px;
    text-align: justify;

      > svg {
        color: ${({ theme }) => theme.COLORS.SALMON};
      }
    
      > img {
        
        width: 16px;
        height: 16px;
        border-radius: 50%;


  }
  }

  > Section {
    padding: 40px 0 40px 0;
  }

 
  
  
`

export const Back = styled.div`
> svg{
  width: 16px;
  height: 16px;

  color: ${({ theme }) => theme.COLORS.SALMON};
}
`

