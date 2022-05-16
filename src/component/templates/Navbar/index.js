import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import * as Styles from './styles';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Badge
} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ButtonGroup from '../../molecules/ButtonGroup';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { InnerProfile, InnerUser } from '../GeneralTemplate/styles';
import { Avatar } from '@mui/material';
import TextAtom from '../../atoms/Text';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { GlobalContext } from '../../../context/global';

import {
  initialRegMentee,
  initialRegMentor,
  userLoginInfo,
} from '../../../helpers/data';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



export default function NavbarTemplate({buttonGroupUserData, buttonGroupData, userName, onClick, role}) {
    /** Get Locations */
    const locations = useLocation();
    const history = useHistory();
    /** Get Pathname */
    const { pathname } = locations;
    /** Path name wothour header */
    const { setLoginInfo, setDataMentor, setDataMentee } = React.useContext(GlobalContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLogout = () => {
      setLoginInfo(userLoginInfo);
      setDataMentor(initialRegMentor);
      setDataMentee(initialRegMentee);
      setAnchorEl(null);

      history.push('/');
    };

    const handleMyCourse = () => {
      setAnchorEl(null);
      role === 'Mentee' ? history.push('/registered-course') : history.push('/detail-course-mentor');
    };

    const handleMySchedule = () => {
      setAnchorEl(null);
      history.push('/schedule');
    };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1,
    marginBottom: pathname !== '/'
    && pathname !== '/register-mentee' 
    && pathname !== '/register-mentor' 
    && pathname !== '/login' ? '18vh' : '4%' }}>
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
          {pathname !== '/'
          && pathname !== '/register-mentee' 
          && pathname !== '/register-mentor' 
          && pathname !== '/login' 
          && (
            <div>
              <InnerProfile>
              <Search sx={{ color: '#969696', border: '1px solid gray', borderRadius:'10px', marginRight:'25vw'}}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: '#969696', marginLeft: '5px' }}/>
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ margin: '0 10px', width: '40vw' }}
                placeholder=" Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
              </Search>
              <IconButton
                size="large"
                aria-label="show new notifications"
                color="inherit"
                sx={{ marginRight: '30px' }}
              >
                <Badge badgeContent={2} color="error">
                  <NotificationsIcon sx={{ color: '#969696' }}/>
                </Badge>
              </IconButton>
              <Avatar alt="user" src={'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'}/>
              <InnerUser>
                <TextAtom size='md' color='#969696'>
                  Welcome,
                </TextAtom>
                <TextAtom size='lg' weight='bold'>
                  {userName}
                </TextAtom>
              </InnerUser>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <KeyboardArrowDownIcon sx={{ color: '#969696', marginLeft: '10px' }}/>
              </Button>
              </InnerProfile>
              {role !== 'Admin' ? (
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={handleMyCourse}>My Course</MenuItem>
                <MenuItem onClick={handleMySchedule}>My Schedule</MenuItem>
                <MenuItem onClick={handleClose}>My Subscription</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
              ) : (
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
              )}
            </div>
          )}
        </Toolbar>
          {pathname !== '/'
          && pathname !== '/register-mentee' 
          && pathname !== '/register-mentor' 
          && pathname !== '/login' 
          && (
            <Toolbar>
              <ButtonGroup
                display='row'
                width='auto'
                buttonGap='27px'
                buttonGroup={buttonGroupUserData}
                onClick={(id) => onClick(id)}
              />
            </Toolbar>
          )}
      </AppBar>
    </Box>
  );
}