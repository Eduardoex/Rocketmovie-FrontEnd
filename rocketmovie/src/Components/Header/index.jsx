import {Container, Profile, Search , Brand } from "./styles"
import { Input } from "../Input"

export function Header(){
  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>


      <Search>
      <Input placeholder="Pesquiser pelo título"/>
      </Search>

      <Profile>
      <div>
        <strong>Eduardo de Lima</strong>
        <span>Sair</span>
      </div>
      
      <img 
        src="https://github.com/eduardoex.png " 
        alt="foto do usuário"
      />
      </Profile>
      

    </Container>
  )
}