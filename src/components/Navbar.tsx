'use client'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About Us', path: '#about' },
  { label: 'Leadership & Policy', path: '#leadership' },
  { label: 'News', path: '#news' },
  { label: 'Congress Party', path: 'https://inc.in', external: true },
  { label: 'Contact Us', path: '#contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  return (
    <AppBar position="fixed" elevation={2} sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 10 } }}>
        {/* Logo or Site Name */}
        <Typography variant="h6" fontWeight="bold" component="a" href="#home" sx={{ textDecoration: 'none', color: 'primary.main' }}>
          BIJENDRA YADAV
        </Typography>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {navLinks.map(link =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: theme.palette.primary.main }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      transition: '0.3s',
                      '&:hover': { color: theme.palette.primary.dark },
                    }}
                  >
                    {link.label}
                  </Typography>
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.path}
                  style={{ textDecoration: 'none', color: theme.palette.primary.main }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      transition: '0.3s',
                      '&:hover': { color: theme.palette.primary.dark },
                    }}
                  >
                    {link.label}
                  </Typography>
                </a>
              )
            )}
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
            <Typography variant="h6" fontWeight="bold" color="primary">
              कांग्रेस
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map(link =>
              link.external ? (
                <ListItemButton
                  key={link.label}
                  component="a"
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              ) : (
                <ListItemButton key={link.label} component="a" href={link.path}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
