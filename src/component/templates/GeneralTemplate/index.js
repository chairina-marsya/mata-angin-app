import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import TextAtom from '../../atoms/Text';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { InnerProfile, InnerUser, PlatformLogo } from './styles';
import { Avatar } from '@mui/material';

const drawerWidth = '18%';

export default function GeneralTemplate(props) {

  const itemLists = [{
    id: 'course',
    label: 'My Course',
    icon: <BookmarkIcon />,
  },{
    id: 'profile',
    label: 'Profile',
    icon: <PersonIcon />,
  },{
    id: 'setting',
    label: 'Settings',
    icon: <SettingsIcon />,
  },{
    id: 'logout',
    label: 'Logout',
    icon: <LogoutIcon />,
  }];

  const drawer = (
      <div style={{
        width: '90%',
        height: '100%',
        padding: '40px 20px',
        margin: '8% 5%',
        border: '1.5px solid #DDDDDD',
        boxSizing: 'border-box',
        boxShadow: '0px 0px 3px 1px rgba(139, 139, 139, 0.19)',
        borderRadius: '10px'
      }}>
      <PlatformLogo />
      <InnerProfile isDrawer>
        <Avatar alt="user" src={'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'}/>
        <InnerUser>
          <TextAtom size='md' color='white'>
            Remy Sharp
          </TextAtom>
          <TextAtom size='xxs' color='white'>
            remy.sharp@mail.com
          </TextAtom>
        </InnerUser>
      </InnerProfile>
      <List>
          <ListItem button key='currentUser' sx={{padding: 0}}>
            <ListItemIcon sx={{minWidth: '35px'}}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
      </List>
      <List>
        {itemLists.map((item) => (
          <ListItem button key={item.id} sx={{padding: 0}}>
            <ListItemIcon sx={{minWidth: '35px'}}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - 18vw)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <InnerProfile>
          <Avatar alt="user" src={'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'}/>
          <InnerUser>
            <TextAtom size='md' color='#969696'>
              Welcome,
            </TextAtom>
            <TextAtom size='xs' weight='bold'>
              Remy Sharp
            </TextAtom>
          </InnerUser>
          <SettingsOutlinedIcon sx={{ color: '#969696', marginLeft: '10px' }}/>
          </InnerProfile>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <TextAtom>Buttons</TextAtom>
        <TextAtom>Put the content Here</TextAtom>
      </Box>
    </Box>
  );
}
