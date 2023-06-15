import styled from "styled-components"

export const Container = styled.header`
grid-area: header;

height: 105px;
width: 100%;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

display: flex;
justify-content: space-between;

padding: 0 80px;



`
export const Profile = styled.div`
display: flex;
align-items: center;

> img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}

> div {
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme}) => theme.COLORS.GRAY_100};
      display: flex;
      flex-direction: row-reverse
    }

    strong {
      font-size: 18px;
      color: ${({ theme}) => theme.COLORS.WHITE}
    }
}

`

export const Brand = styled.div`
display: flex;
align-items: center;

> h1 {
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.SALMON};
}
`


/*export const Search = styled.div`
grid-area: serch;

padding: 64px 64px 0;
`*/