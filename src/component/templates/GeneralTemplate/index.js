import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextAtom from '../../atoms/Text';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

import { InnerProfile, InnerUser, PlatformLogo } from './styles';
import { Avatar } from '@mui/material';

const drawerWidth = 320;

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
      <div style={{width: '92%', height: '100%', padding: '20px', margin: '10% 5%', border: '1px solid grey', borderRadius: '8px'}}>
      <PlatformLogo />
      <InnerProfile>
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
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
