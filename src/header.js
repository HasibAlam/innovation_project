import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CodeOffTwoToneIcon from '@mui/icons-material/CodeOffTwoTone';
import { Link } from 'react-router-dom'; // Import the Link component

const pages = ['Home', 'Services', 'Request an Audit', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(to bottom, #8B0000, #2C001E)',
        borderBottom: '2px solid #DB7093',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeOffTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '32px', color: '#FF0000', mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link} // Use the Link component
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#DB7093',
              textDecoration: 'none',
              fontSize: '24px',
            }}
          >
            Dead-Lock
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: '#ffffff',
                  '&:hover': {
                    color: '#ff5733',
                  },
                  fontFamily: 'Roboto Condensed, sans-serif',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '18px',
                }}
                component={Link} // Use the Link component
                to={page === 'Request an Audit' ? '/audit' : '/'}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>{/* ... (User menu and other contents) */}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
