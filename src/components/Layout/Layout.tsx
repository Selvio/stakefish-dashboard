import { FC } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

import Spinner from "../Spinner";

import {
  Container,
  Logo,
  LogoContainer,
  SpinnerContainer,
} from "./Layout.styles";

interface LayoutProps {
  isLoading?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, isLoading }) => (
  <Container>
    <LogoContainer>
      <Link to="/">
        <Logo src={logo} alt="Stake Fish" />
      </Link>
    </LogoContainer>
    {isLoading ? (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    ) : (
      children
    )}
  </Container>
);

Layout.defaultProps = {
  isLoading: false,
};

export default Layout;
