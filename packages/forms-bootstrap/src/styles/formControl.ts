import { css } from "@emotion/css";
import theme from "../themes/index.js";

import { Theme } from "../themes/index.js";

export default css`
    display: block;
    width: 100%;
    padding: 10px;
    margin: 30px;
    /* font-family: $input-font-family; */
    /* @include font-size($input-font-size); */
    /* font-weight: $input-font-weight; */
    line-height: 30px;
    /* color: $input-color; */
    /* background-color: $input-bg; */
    background-clip: padding-box;
    border: ${theme.border.size} solid black;
    border-radius: 5px;
    background-color: ${theme.color};
`;

export function getStyles(theme: Theme) {
    return css`
        display: block;
        width: 100%;
        padding: 10px;
        margin: 30px;
        /* font-family: $input-font-family; */
        /* @include font-size($input-font-size); */
        /* font-weight: $input-font-weight; */
        line-height: 30px;
        /* color: $input-color; */
        /* background-color: $input-bg; */
        background-clip: padding-box;
        border: ${theme.border.size} solid black;
        border-radius: 5px;
        background-color: ${theme.color};
    `;
}
