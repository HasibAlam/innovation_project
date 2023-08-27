import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from './header';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Displayimage from './displayimage';
import Footer from './footer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: 'linear-gradient(to bottom, #2C001E, #190033)', // Dark purple gradient
        minHeight: '100vh',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Header />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <ImageList sx={{ height: 350 }} cols={1} rowHeight={350}>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
                  loading="lazy"
                  style={{ height: '100%' }}
                />
              </ImageListItem>
            </ImageList>
          </Item>
        </Grid>
        {/* Add the rest of your grid items here */}
        <Grid item xs={3}>
          <Item>0
            <Displayimage />
          </Item>
        </Grid>
        {/* Repeat the above line for other grid items */}
        <Grid item xs={12}>
          <Item>
            <Footer />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
