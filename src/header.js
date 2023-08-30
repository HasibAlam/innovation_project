import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CodeOffTwoToneIcon from '@mui/icons-material/CodeOffTwoTone';

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
        background: 'linear-gradient(to bottom, #8B0000, #2C001E)', // Gradient of darker red and dark purple
        borderBottom: '2px solid #DB7093', // Line underneath the AppBar with PaleVioletRed color
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeOffTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '32px', color: '#FF0000', mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#DB7093', // Light coral color
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
                  color: '#ffffff', // White text
                  '&:hover': {
                    color: '#ff5733', // Hover color
                  },
                  fontFamily: 'Roboto Condensed, sans-serif',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '18px',
                }}
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
