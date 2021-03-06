// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import getViewportHideStyles from "../../Hide/helpers/getViewportHideStyles";

import type { Props } from "./index";

const StyledColumn = styled.div`
  ${({ hideOn }) => !!hideOn && getViewportHideStyles(hideOn)};
`;

StyledColumn.defaultProps = {
  theme: defaultTheme,
};

const LayoutColumn = ({ children, hideOn, element = "div", dataTest }: Props) => {
  return (
    <StyledColumn data-test={dataTest} hideOn={hideOn} as={element}>
      {children}
    </StyledColumn>
  );
};

export default LayoutColumn;
