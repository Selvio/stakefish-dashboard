import { FC } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

import { Container, LogoContainer, Logo } from "./Layout.styles";

const Layout: FC = ({ children }) => (
  <Container>
    <LogoContainer>
      <Link to="/">
        <Logo src={logo} alt="Stake Fish" />
      </Link>
    </LogoContainer>
    {children}
  </Container>
);

export default Layout;
