import {Container, Profile, /*Search */ Brand } from "./styles"

export function Header(){
  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Profile>
      <div>
        <strong>Eduardo de Lima</strong>
        <span>Sair</span>
      </div>
      

      {/*<Search>
      <Input placeholder="Pesquiser pelo título"/>
      </Search>*/}

      {/* REMOVER QUANDO O INPUT FOR CRIADO*/}

      
      <img 
        src="https://github.com/eduardoex.png " 
        alt="foto do usuário"
      />
      </Profile>
      

    </Container>
  )
}