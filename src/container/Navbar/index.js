import React from 'react';
import NavbarTemplate from '../../component/templates/Navbar';

import PersonIcon from '@mui/icons-material/Person';

export default function Navbar() {

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
        console.log('test', id);
    };

return (
    <NavbarTemplate buttonGroupData={buttonGroupData} onClick={onClick} />
  );
}