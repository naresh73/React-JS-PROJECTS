import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['What to do','Membership','Congress','Resources','News and views','About us'];

const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container className='topbar' maxWidth="l">
        <Toolbar disableGutters>
          <Typography
            variant="h5 "
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 1,
              width:'40%',
              alignItems:'center',
              textDecoration: 'none',
            }}
          className="logoname" >
           <img src='https://world.physio/themes/custom/wcpt/assets/images/logo.svg' height="100" width="150" />
          </Typography>

          
          <AdbIcon  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography 
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs : 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'blue', display: 'block', fontWeight:540, fontFamily:'Georgia, serif;'}}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;
