import styled from "styled-components";
import { rem } from "polished";
import { Link } from "react-router-dom";

export const StyledLInk = styled(Link)`
  align-items: center;
  display: flex;
  font-size: ${rem("18px")};
  margin-bottom: ${rem("48px")};

  &:hover {
    color: ${({ theme }) => theme.colors.lightningYellow};
  }

  svg {
    margin-right: ${rem("12px")};
  }
`;

export const Title = styled.h1`
  margin-bottom: ${rem("24px")};

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin-bottom: ${rem("48px")};
  }
`;

export const Info = styled.div`
  display: grid;
  max-width: ${rem("600px")};

  @media ${({ theme }) => theme.mediaQueries.large} {
    column-gap: ${rem("48px")};
    grid-template-columns: 80px 1fr;
  }
`;

export const LogoContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: ${rem("80px")};
  margin-bottom: ${rem("24px")};

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-bottom: 0;
    align-items: center;
  }
`;

export const ExchangeLogo = styled.img`
  border-radius: 50%;
  height: ${rem("80px")};
  margin-bottom: ${rem("12px")};
  object-fit: cover;
  width: ${rem("80px")};
`;

export const Item = styled.div`
  &:not(:last-child) {
    margin-bottom: ${rem("24px")};
  }
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.raven};
  font-weight: 400;
  margin-bottom: ${rem("3px")};
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialMediaLink = styled.a`
  align-items: center;
  display: flex;
  font-size: ${rem("20px")};

  &:hover {
    color: ${({ theme }) => theme.colors.lightningYellow};
  }

  &:not(:last-child) {
    margin-right: ${rem("12px")};
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: ${rem("16px")};
  }
`;

export const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${rem("350px")};
  justify-content: center;
`;
