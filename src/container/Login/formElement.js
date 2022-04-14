import * as Color from '../../helpers/colors';

export const FormElement = [{
    type: 'text',
    data: { 
     id: 'loginLabel',
     key: 'loginLabel',
     label: 'Get started for free',
     color: Color.oldGrey,
     fontSize: '14px',
     width: '100%',
    }},
    {
    type: 'input',
    data: { 
     id: 'inputEmail',
     key: 'inputEmail',
     label: 'Email',
     width: '100%',
    }},
    {
    type: 'input',
    data: { 
     id: 'inputPassword',
     key: 'inputPassword',
     label: 'Password',
     width: '100%',
    }},
    {
    type: 'link',
    data: { 
     id: 'linkForgotPassword',
     key: 'linkForgotPassword',
     label: 'Forgot Password?',
     linkUrl: '#',
     width: '100%',
    }},
    {
    type: 'link',
    data: { 
     id: 'linkCreateAccount',
     key: 'linkCreateAccount',
     label: 'Create Account',
     linkUrl: '#',
     width: '100%',
    }},
    {
    type: 'checkbox',
    data: { 
     id: 'termConditions',
     key: 'termConditions',
     label: 'I accept the Terms and Conditions',
     width: '100%',
    }},
];
