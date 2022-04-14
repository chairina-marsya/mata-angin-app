import React from 'react';
import NavbarTemplate from '../../component/templates/Navbar';

import { buttonGroupData } from './formElement';
import { useHistory } from "react-router-dom";


export default function Navbar() {
    const history = useHistory();

    const onClick = (id) => {
        switch (id) {
          case 'home':   
            history.push("/");
            break;
          case 'buttonRegistration':   
            history.push("/register");
          break;
          case 'buttonRegistMentor':
          break;
          case 'buttonLogin':
            history.push("/login");
          break;
          default:
            break;
        }
    };

return (
    <NavbarTemplate buttonGroupData={buttonGroupData} onClick={onClick} />
  );
}