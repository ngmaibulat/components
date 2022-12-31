import { css } from "@emotion/css";

export function box() {
    const targetList = document.querySelectorAll(".ngm-box");

    const style = css`
        color: red;
        background-color: black;
        height: 100px;
        width: 100px;
        margin: 0 auto;
    `;

    for (const target of targetList) {
        target.classList.add(style);
    }
}
