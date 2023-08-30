import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography'; // Import Typography component
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CodeOffTwoTone } from '@mui/icons-material';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const headingStyle = {
  color: '#FFFFFF',
};

const columnStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const memberNameStyle = {
  marginRight: '150px', // Add spacing between member names
};

const largerIconStyle = {
  fontSize: '48px',
};

const gradientBackgroundStyle = {
  background: 'linear-gradient(to bottom,#810d69, #582794 )',
  padding: '20px',
};

const whiteTextStyle = {
  color: '#FFFFFF',
};

const dividerStyle = {
  borderTop: '1px solid #FFFFFF', // Change border color to white (#FFFFFF)
};

export default function DenseMenu() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Paper style={gradientBackgroundStyle}>
        <div style={containerStyle}>
          {/* Section 1: Heading */}
          <Typography variant="h5" style={headingStyle}>
            Contact Us
          </Typography>

          {/* Section 2: Message */}
          <Typography variant="body1" style={headingStyle}>
            Thanks for visiting. We would love your feedback.
          </Typography>

          {/* Section 3: CodeOff Icon */}
          <MenuList dense style={columnStyle}>
            <MenuItem>
              <ListItemIcon>
                <CodeOffTwoTone style={largerIconStyle} />
              </ListItemIcon>
              <ListItemText style={whiteTextStyle}>
                Dead-Lock
              </ListItemText>
            </MenuItem>
            
            {/* Section 4: Member 1 */}
            <MenuItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText style={whiteTextStyle} primary="Md Ahnaf Islam" style={memberNameStyle} secondary="103842975@student.swin.edu.au" />
            </MenuItem>
            
            {/* Section 5: Member 2 */}
            <MenuItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText style={whiteTextStyle} primary="Md Hasib Alam" style={memberNameStyle} secondary="103810516@student.swin.edu.au" />
            </MenuItem>
            
            {/* Section 6: Member 3 */}
            <MenuItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText style={whiteTextStyle} primary="Levish Boodho" style={memberNameStyle} secondary="123456@student.swin.edu.au" />
            </MenuItem>
          </MenuList>

          {/* Add a horizontal line at the beginning of the footer */}
          <Divider style={dividerStyle} />

          {/* Footer Content */}
          {/* Add your footer content here */}
        </div>
      </Paper>
    </ThemeProvider>
  );
}
