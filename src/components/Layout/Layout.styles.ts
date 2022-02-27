import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${rem("950px")};
  padding: ${rem("48px")} ${rem("24px")};
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.small} {
    padding: ${rem("96px")} ${rem("24px")} ${rem("48px")};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem("48px")};

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin-bottom: ${rem("72px")};
  }
`;

export const Logo = styled.img`
  width: ${rem("217px")};
`;
