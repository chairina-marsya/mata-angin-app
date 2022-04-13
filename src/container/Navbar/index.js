import React from 'react';
import NavbarTemplate from '../../component/templates/Navbar';

export default function Navbar() {
    const onClick = (id) => {
        console.log(id);
    }
return (
    <NavbarTemplate onClick={onClick} />
  );
}