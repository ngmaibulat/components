import React from "react";
import styles from "../styles/formControl.js";

type Props = {
    id: string;
    name: string;
};

export function InputText(props: Props) {
    return (
        <input
            className={styles}
            type="number"
            name={props.name}
            id={props.id}
        />
    );
}
