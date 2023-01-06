import styled from "@aibulat/styled";
import theme from "../themes/index.js";

type Props = {
    size: number;
};

export const Box = styled.div<Props>`
    color: ${theme.color};
    background-color: ${theme.colors.background};
    height: ${theme.size}px;
    width: ${theme.size}px;
    margin: 0 auto;
`;
