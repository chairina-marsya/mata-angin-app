import React from "react";

import LoginTemplate from '../../component/templates/Login';
import { FormElement } from './formElement';
import { useHistory } from "react-router-dom";


export default function Login() {
    const history = useHistory();

    const onChange = (id) =>{
        console.log('id', id);
    }
    const onClick = (id) =>{
        console.log('click', id);
        switch (id) {
            case 'loginButton':
                history.push('/homepage/mentee');
                break;
        
            default:
                break;
        }
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