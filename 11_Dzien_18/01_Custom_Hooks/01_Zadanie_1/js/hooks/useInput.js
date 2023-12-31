import React, {useState} from "react";

export function useInput(initialValue) {

    const [value, setValue] = useState(initialValue);

    return [
        value,
        {
            value, // value: value
            onChange: e => {
                setValue(e.target.value)
            }
        }
    ]

}