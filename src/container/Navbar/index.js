import React from 'react';
import NavbarTemplate from '../../component/templates/Navbar';

import PersonIcon from '@mui/icons-material/Person';
import { useHistory } from "react-router-dom";


export default function Navbar() {
    const history = useHistory();

    const buttonGroupData = [{
        id:'buttonRegistMentor',
        label: 'Become a mentor',
        variant: 'text',
        color: 'rgba(0, 0, 0, 0.6)',
        startIcon: null,
        width: 'auto',
      },
      {
        id:'buttonLogin',
        label: 'LOGIN',
        variant: 'outlined',
        color: 'rgba(0, 0, 0, 0.87)',
        bordercolor: 'rgba(0, 0, 0, 0.87)',
        startIcon: <PersonIcon />,
        width: '117px',
      },
      {
        id:'buttonRegistration',
        label: 'REGISTER',
        variant: 'outlined',
        color: 'rgba(0, 0, 0, 0.87)',
        bordercolor: 'rgba(0, 0, 0, 0.87)',
        startIcon: null,
        width: '117px',
      },
    ];

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
          break;
          default:
            break;
        }
    };

return (
    <NavbarTemplate buttonGroupData={buttonGroupData} onClick={onClick} />
  );
}