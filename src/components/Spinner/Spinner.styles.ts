import styled from "styled-components";

export const StyledSpinner = styled.div`
  animation-delay: -0.16s;
  color: ${({ theme }) => theme.colors.lightningYellow};
  font-size: 11px;
  margin: 88px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);

  &,
  &:before,
  &:after {
    animation: load 1s infinite ease-in-out;
    background-color: ${({ theme }) => theme.colors.lightningYellow};
    height: 4em;
    width: 1em;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
  }

  &:before {
    animation-delay: -0.32s;
    left: -1.5em;
  }

  &:after {
    animation-delay: -0.16s;
    left: 1.5em;
  }

  @keyframes load {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;
