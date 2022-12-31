import { css } from "@emotion/css";

export function formControl() {
    const targetList = document.querySelectorAll(".ngm-form-control");

    const padding = "10px";
    const borderColor = "red";

    const style = css`
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
        border: 1px solid ${borderColor};
        border-radius: 5px;
    `;

    for (const target of targetList) {
        target.classList.add(style);
    }
}
