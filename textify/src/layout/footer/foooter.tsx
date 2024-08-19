import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', pt: 6, pb: 6 }}>
      <Box >
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <img src="path/to/logo.png" alt="Logo" width={50} height={50} />
                <Typography variant="h6" color="" sx={{ ml: 1 }}>
                  TEXTIFY
                </Typography>
              </Box>
              <Typography variant="body2" color="secondary.main" gutterBottom>
                Copyrights © 2024 All Rights Reserved By <strong>TEXTIFY</strong>
              </Typography>
              <Typography variant="body2" >
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', mb: 1,color:"#7ECFF8" }}>
                
                  info@textifyt.co.uk
                </Box>
                <Box component="span" sx={{ display: 'flex', alignItems: 'center' ,color:"secondary.main"}}>
                  
                  237, Air Line Housing Scheme Society Lahore , Punjab pakistan
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" color="secondary.main" gutterBottom>
                Company
              </Typography>
              <Link href="#" variant="body2" color="secondary.main" display="block" gutterBottom>
                About Us
              </Link>
              <Link href="#" variant="body2" color="secondary.main" display="block" gutterBottom>
                Contact Us
              </Link>
              <Link href="#" variant="body2" color="secondary.main" display="block" gutterBottom>
                Careers
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" color="secondary.main" gutterBottom>
                Legal
              </Typography>
              <Link href="#" variant="body2" color="secondary.main" display="block" gutterBottom>
                Terms And Condition
              </Link>
              <Link href="#" variant="body2" color="secondary.main" display="block" gutterBottom>
                Privacy Policy
              </Link>
              <Link href="#" variant="body2" color="secondary.main" display="block" gutterBottom>
                Cookie Policy
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6"  color="secondary.main" gutterBottom>
                Install App
              </Typography>
              <Box>
              <Link href="#" variant="body2" color="secondary.main" display="block" gutterBottom>
                About Us
              </Link>  <Link href="#" variant="body2" color="secondary.main" display="block" gutterBottom>
                About Us
              </Link>
              <Link href="#" variant="body2" color="secondary.main" display="block" gutterBottom>
                About Us
              </Link>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid #E0E0E0', mt: 4, pt: 3 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' }, mt: { xs: 2, md: 0 } }}>
                <Typography variant="body2" color="secondary.main">
                  © 2024 All Rights Reserved By <strong>TEXTIFY</strong>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right', }, mt: { xs: 2, md: 0 } }}>
                <Link href="#" variant="body2" color="secondary.main" display="inline-block" sx={{ mr: 2 }}>
                  Terms And Condition
                </Link>
                <Link href="#" variant="body2" color="secondary.main" display="inline-block" sx={{ mr: 2 }}>
                  Privacy Policy
                </Link>
                <Link href="#" variant="body2" color="secondary.main" display="inline-block">
                  Cookies Policy
                </Link>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' }, mt: { xs: 2, md: 0 } }}>
                <IconButton href="#" color="inherit" aria-label="Facebook">
                  <Facebook sx={{ color: '#3C3E6B' }} />
                </IconButton>
                <IconButton href="#" color="inherit" aria-label="Instagram">
                  <Instagram sx={{ color: '#3C3E6B' }} />
                </IconButton>
                <IconButton href="#" color="inherit" aria-label="LinkedIn">
                  <LinkedIn sx={{ color: '#3C3E6B' }} />
                </IconButton>
                <IconButton href="#" color="inherit" aria-label="Twitter">
                  <Twitter sx={{ color: '#3C3E6B' }} />
                </IconButton>
                <IconButton href="#" color="inherit" aria-label="YouTube">
                  <YouTube sx={{ color: '#3C3E6B' }} />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
