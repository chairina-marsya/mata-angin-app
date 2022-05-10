import * as React from 'react';
import * as Styles from './styles';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import ButtonGroup from '../../molecules/ButtonGroup';


export default function NavbarTemplate({buttonGroupData, onClick}) {
    /** Get Locations */
    const locations = useLocation();
    /** Get Pathname */
    const { pathname } = locations;
    /** Path name wothour header */
    const noHeader = pathname.includes('/homepage');

  return (
    <Box sx={{ display: noHeader ? 'none' : 'flex', flexGrow: 1, marginBottom: '4%' }}>
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
          {pathname === '/' && (
          <ButtonGroup
            display='row'
            width='auto'
            buttonGap='27px'
            buttonGroup={buttonGroupData}
            onClick={(id) => onClick(id)}
          />)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}