import React from "react";

import LoginTemplate from '../../component/templates/Login';
import { FormElement } from './formElement';

export default function Login() {
    const onChange = (id) =>{
        console.log('id', id);
    }
    const onClick = (id) =>{
        console.log('click', id);
    }

    return(
        <LoginTemplate
            onChange={onChange}
            onClick={onClick}
            inputData={FormElement}
            inputGap="1rem"
            margin="20px 0"
            width="100%"
            direction="column"
        />
    )
}