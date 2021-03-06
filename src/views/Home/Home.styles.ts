import styled, { css } from "styled-components";
import { rem } from "polished";
import { Link } from "react-router-dom";

import { ScrollIndicators } from "./useHome";

const buttonStyles = css`
  align-items: center;
  border-radius: ${rem("4px")};
  cursor: pointer;
  display: flex;
  font-size: ${rem("12px")};
  height: ${rem("36px")};
  justify-content: center;
  transition: 0.3s;
  width: ${rem("130px")};
`;

export const Title = styled.h1`
  margin-bottom: ${rem("48px")};
`;

interface TableContainerProps {
  scrollIndicatorsState: ScrollIndicators;
}

export const TableContainer = styled.div<TableContainerProps>`
  position: relative;

  &:before,
  &:after {
    bottom: 0;
    content: "";
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: 0.3s;
    width: 80px;
  }

  &:before {
    background-image: linear-gradient(
      to left,
      rgba(15, 16, 20, 0),
      rgba(15, 16, 20, 1)
    );
    left: 0;
    opacity: ${({ scrollIndicatorsState }) =>
      scrollIndicatorsState.left ? "1" : "0"};
  }

  &:after {
    background-image: linear-gradient(
      to right,
      rgba(15, 16, 20, 0),
      rgba(15, 16, 20, 1)
    );
    right: 0;
    opacity: ${({ scrollIndicatorsState }) =>
      scrollIndicatorsState.right ? "1" : "0"};
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    &:before,
    &:after {
      display: none;
    }
  }
`;

export const InnerContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  min-width: ${rem("845px")};
  text-align: left;
  width: 100%;

  th {
    color: ${({ theme }) => theme.colors.raven};
    font-size: ${rem("14px")};
    font-weight: 400;
  }

  td {
    padding: ${rem("12px")} 0;

    &:last-child {
      width: ${rem("272px")};
    }
  }
`;

export const Info = styled.div`
  align-items: center;
  display: flex;
`;

export const ExchangeLogo = styled.img`
  border-radius: 50%;
  height: ${rem("32px")};
  margin-right: ${rem("12px")};
  object-fit: cover;
  width: ${rem("32px")};
`;

export const Name = styled.h2`
  font-size: ${rem("20px")};
  font-weight: 400;
  margin: 0;
`;

export const Buttons = styled.div`
  column-gap: ${rem("12px")};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Anchor = styled.a`
  ${buttonStyles}
  background-color: ${({ theme }) => theme.colors.lightningYellow};
  color: ${({ theme }) => theme.colors.woodsmoke};

  &:hover {
    background-color: ${({ theme }) => theme.colors.goldenGrass};
  }
`;

export const StyledLink = styled(Link)`
  ${buttonStyles}
  background-color: ${({ theme }) => theme.colors.tuna};

  &:hover {
    background-color: ${({ theme }) => theme.colors.shark};
  }
`;

export const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${rem("350px")};
  justify-content: center;
`;
