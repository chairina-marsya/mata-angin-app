import * as React from 'react';
import * as Styles from './styles';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
} from '@mui/material';
import ButtonAtom from '../../atoms/Button';
import { useLocation } from 'react-router-dom';


export default function NavbarTemplate({onClick}) {
    /** Get Locations */
    const locations = useLocation();
    /** Get Pathname */
    const { pathname } = locations;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        sx={{
            flexGrow: 1,
            backgroundColor:'white',
        }}>
        <Toolbar
            sx={{
                justifyContent: 'space-between',
                alignContent: 'center',
            }}
        >
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='home'
            sx={{ mr: 2 }}
            onClick={() => onClick('home')}
          >
              <Styles.PlatformLogo />
          </IconButton>
          {pathname === '/' && (<ButtonAtom buttonText='Text'/>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}