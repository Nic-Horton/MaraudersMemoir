import React from 'react'
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="subtitle1" align="center" color="text.primary" component="p">
      {'Copyright © '}
      <Link component={NavLink} color="inherit" to={'/'}>
        MaraudersMemoir
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer