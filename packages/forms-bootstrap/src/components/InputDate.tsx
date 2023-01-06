import React from "react";
import styles from "../styles/formControl.js";

type Props = {
    id: string;
    name: string;
};

export function InputDate(props: Props) {
    return (
        <input
            className={styles}
            type="date"
            name={props.name}
            id={props.id}
        />
    );
}
