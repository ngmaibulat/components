import React from "react";
import { ThemeProvider } from "@emotion/react";

import { Box } from "./components/Box.jsx";
import { InputText } from "./components/InputText.jsx";
// import theme from "./themes/index.js";

import { getTheme, setTheme } from "./themes/index.js";

//load theme from LocalStorage
//if not exists => setDefault

setTheme("default");
let theme = getTheme();

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Box>Test</Box>
                <InputText id="inp" name="name" />
            </div>
        </ThemeProvider>
    );
}
