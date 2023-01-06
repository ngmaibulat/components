import React from "react";
import { useTheme } from "@emotion/react";

import { Theme } from "../themes/index.js";
import { getStyles } from "../styles/formControl.js";

type Props = {
    id: string;
    name: string;
};

export function InputText(props: Props) {
    const theme = useTheme() as Theme;
    const styles = getStyles(theme);

    console.log(theme);
    console.log(styles);

    return (
        <input
            className={styles}
            type="text"
            name={props.name}
            id={props.id}
        />
    );
}
