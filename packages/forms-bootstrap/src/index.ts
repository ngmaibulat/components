import { css } from "@emotion/css";

const color = "white";

const app = document.getElementById("root")!;
const style = css`
    color: red;
    background-color: black;
    height: 600px;
    width: 300px;
    margin: 0 auto;
`;
app.classList.add(style);
