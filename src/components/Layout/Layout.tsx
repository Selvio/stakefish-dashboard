import { Link, Outlet } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

import { Container, Logo, LogoContainer } from "./Layout.styles";

const Layout = () => (
  <Container>
    <LogoContainer>
      <Link to="/">
        <Logo src={logo} alt="Stake Fish" />
      </Link>
    </LogoContainer>
    <Outlet />
  </Container>
);

export default Layout;
