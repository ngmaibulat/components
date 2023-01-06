import React from "react";
import styles from "../styles/formControl.js";

type Props = {
    id: string;
    name: string;
};

export function InputEmail(props: Props) {
    return (
        <input
            className={styles}
            type="email"
            name={props.name}
            id={props.id}
        />
    );
}
