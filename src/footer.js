import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import EmailIcon from '@mui/icons-material/Email';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    background: {
      default: '#330000', // Reddish-black background color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Use Roboto font
  },
});

export default function DenseMenu() {
  return (
    <ThemeProvider theme={theme}>
      <MenuList dense>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          <ListItemText>
            Thanks for visiting our page. We would love your feedback!
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Team Members:" />
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Md Ahnaf Islam" secondary="103842975@student.swin.edu.au" />
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Md Hasib Alam" secondary="103810516@student.swin.edu.au" />
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Levish Boodho" secondary="123456@student.swin.edu.au" />
        </MenuItem>

        <Divider />
      </MenuList>
    </ThemeProvider>
  );
}
