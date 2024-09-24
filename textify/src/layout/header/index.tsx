'use client';

import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import logo from "../../../public/logo.png";
import Link from 'next/link';

const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Privacy Policy', href: '/privacy-policy' }
];

const NavLink = styled(Typography)(() => ({
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '8px 12px',
    marginRight: '10px',
    color: '#005F73',
    textDecoration: 'none',
    border: 'none',
    background: 'none',
    listStyle: 'none',
    margin: '0 8px',
    transition: 'color 0.3s ease-in-out',
    cursor: 'pointer',
    // '&::after': {
    //     content: '""',
    //     position: 'absolute',
    //     bottom: 9,
    //     left: 0,
    //     width: 'calc(100% - 15px)',
    //     height: '1px',
    //     backgroundColor: '#005F73',
    //     transform: 'scaleX(0)',
    //     transformOrigin: 'bottom left',
    //     transition: 'transform 0.3s ease-in-out',
    //     animation: 'none',
    // },
    // '&:hover': {
    //     color: '#003d3d',
    //     '&::after': {
    //         transform: 'scaleX(1)',
    //         animation: 'slideIn 0.3s forwards',
    //     },
    // },
}));

const SignInLink = styled(Button)(({ theme }) => ({
    color: '#005F73',
    padding: '8px 12px',
    fontSize: '12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease-in, color 0.3s ease-in',
    '&:hover': {
        backgroundColor: '#005F73',
        color: '#fff',
    },
}));

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen((prevOpen) => !prevOpen);
    };

    useEffect(() => {
        if (isLargeScreen && mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    }, [isLargeScreen, mobileMenuOpen]);

    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: '#fff',
                boxShadow: 'none',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={logo} alt="logo" width={48} height={48} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#005F73',
                                textDecoration: 'none',
                            }}
                        >
                            TEXTIFY
                        </Typography>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
                        {navigationLinks.map((link) => (
                            <Link key={link.label} href={link.href} passHref style={{ textDecoration: 'none' }}>
                                <NavLink className="nav-link" sx={{ color: '#005F73', padding: '12px 16px', listStyle: "none", textDecoration: "none" }}>
                                    {link.label}
                                </NavLink>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <SignInLink sx={{ }}>
                            Sign In
                        </SignInLink>
                    </Box>

                    <IconButton
                        size="large"
                        aria-label="toggle navigation menu"
                        onClick={handleMobileMenuToggle}
                        sx={{ color: '#005F73', display: { xs: 'flex', md: 'none' } }}
                    >
                        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Toolbar>

                {mobileMenuOpen && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 64,
                            left: 0,
                            width: '100%',
                            backgroundColor: '#fff',
                            zIndex: 9999,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '16px 0',
                            maxHeight: '250px',
                            overflowY: 'auto',
                            borderTop: '1px solid #ddd',
                        }}
                    >
                        {navigationLinks.map((link) => (
                            <MenuItem
                                key={link.label}
                                onClick={handleMobileMenuToggle}
                                sx={{
                                    width: '100%',
                                    textAlign: 'center',
                                    padding: 0,
                                    borderBottom: '1px solid #ddd',
                                }}
                            >
                                <Link href={link.href} passHref style={{ textDecoration: 'none' }}>
                                    <NavLink className="nav-link" sx={{ color: '#005F73', padding: '12px 16px', listStyle: "none", textDecoration: "none" }}>
                                        {link.label}
                                    </NavLink>
                                </Link>
                            </MenuItem>
                        ))}
                        <MenuItem
                            onClick={handleMobileMenuToggle}
                            sx={{
                                width: '100%',
                                textAlign: 'center',
                                padding: 0,
                            }}
                        >
                            <SignInLink sx={{ padding: '12px 16px' }}>
                                Sign In
                            </SignInLink>
                        </MenuItem>
                    </Box>
                )}
            </Container>
        </AppBar>
    );
}