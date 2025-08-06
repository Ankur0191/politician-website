'use client'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  ListItemButton,
  ListItemText,
  InputBase,
  Button,
  useScrollTrigger,
  Slide,
  Divider,
} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'
import { useTheme } from '@mui/material/styles'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Leadership & Policy', path: '/leadership' },
  { label: 'News', path: '/news' },
  { label: 'Congress Party', path: 'https://inc.in', external: true },
  { label: 'Contact Us', path: '/contact' },
]

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const theme = useTheme()

  const toggleDrawer = () => setDrawerOpen(!drawerOpen)

  const handleSearchToggle = () => {
    setSearchOpen(prev => !prev)
    if (!searchOpen) setTimeout(() => document.getElementById('search')?.focus(), 100)
    else setSearchQuery('')
  }

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="sticky"
          sx={{
            bgcolor: 'white',
            color: 'primary.main',
            boxShadow: 3,
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: 'primary.main',
                '&:hover': { color: 'primary.dark' },
              }}
            >
              INC LEADER
            </Typography>

            {/* Desktop Nav Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
              {navLinks.map(link =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      color: theme.palette.primary.main,
                      fontWeight: 500,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        transition: '0.3s',
                        '&:hover': { color: theme.palette.primary.dark },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.path}
                    style={{ textDecoration: 'none', color: theme.palette.primary.main }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        transition: '0.3s',
                        fontWeight: 500,
                        '&:hover': { color: theme.palette.primary.dark },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                )
              )}
            </Box>

            {/* Search Box (optional, hidden on mobile) */}
            {searchOpen && (
              <InputBase
                id="search"
                placeholder="Search..."
                sx={{
                  border: '1px solid #ccc',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  mr: 2,
                  width: 200,
                  display: { xs: 'none', sm: 'block' },
                }}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') alert(`Searching for: ${searchQuery}`)
                }}
              />
            )}

            {/* Right Controls */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={handleSearchToggle} size="small">
                {searchOpen ? <CloseIcon /> : <SearchIcon />}
              </IconButton>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 20,
                  textTransform: 'none',
                  px: 3,
                  fontWeight: 500,
                  display: { xs: 'none', sm: 'inline-flex' },
                }}
                href="/contact"
              >
                Join Us
              </Button>

              <IconButton edge="end" sx={{ display: { md: 'none' } }} onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 2,
              py: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          {navLinks.map(link =>
            link.external ? (
              <a
                key={link.label}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ListItemButton onClick={toggleDrawer}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.path}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ListItemButton onClick={toggleDrawer}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </Link>
            )
          )}
          <Box sx={{ px: 2, mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ borderRadius: 2 }}
              href="/contact"
            >
              Join Us
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
