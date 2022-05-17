import React, { useContext } from "react";

import LoginTemplate from '../../component/templates/Login';
import { FormElement } from './formElement';
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/global";


export default function Login() {
    const history = useHistory();
    const { loginInfo, setLoginInfo } = useContext(GlobalContext);

    const onChange = (id, val) =>{
        if (id=== 'inputEmail') setLoginInfo({ ...loginInfo, email: val })
        if (id=== 'inputPassword') setLoginInfo({ ...loginInfo, password: val })
    }
    const onClick = (id) =>{
        switch (id) {
            case 'loginButton':
                if (loginInfo.email.includes('admin') || loginInfo.email.includes('Admin')) {
                    history.push('/dashboard-admin')
                };
                if (loginInfo.email.includes('mentor') || loginInfo.email.includes('Mentor')) {
                    history.push('/course-mentor')
                };
                if (loginInfo.email.includes('mentee') || loginInfo.email.includes('Mentee')) {
                    history.push('/course-mentee')
                };
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