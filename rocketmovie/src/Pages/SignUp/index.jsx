import {Container, Form, Cinema } from "./styles";
import { Input } from "../../Components/Input"
import { FiLock, FiMail, FiUser} from "react-icons/fi"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom"

import {Button} from "../../Components/Button"


export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
          
          <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          />
          
          <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          />

          <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          />

          <Button title="Cadastrar"/>
            

        
         
        <Link to="/"><AiOutlineArrowLeft/><p>Voltar para o login</p></Link>
        

      </Form>

      <Cinema/>
    </Container>
  );
}