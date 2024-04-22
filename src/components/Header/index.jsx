import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from './styles';

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img 
        src="https://github.com/fernando-ruans.png"
        alt="Imagem do Usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Fernando Ruan</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}