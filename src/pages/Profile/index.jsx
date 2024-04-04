import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Input
          plceholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          plceholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          plceholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          plceholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>
    </ Container>
  );
}