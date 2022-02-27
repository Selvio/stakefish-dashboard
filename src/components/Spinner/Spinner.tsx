import { FC } from "react";

import { StyledSpinner } from "./Spinner.styles";

const Spinner: FC = () => (
  <StyledSpinner data-testid="spinner">Loading...</StyledSpinner>
);

export default Spinner;
