'use client'

import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  useMediaQuery,
  IconButton,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

export default function ContactSection() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
        bgcolor: 'background.paper',
        borderTop: '6px solid #1976d2', // Primary Blue
        borderBottom: '6px solid #0288d1', // Lighter Blue
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 6,
          fontWeight: 700,
          textAlign: 'center',
          color: 'primary.main',
          letterSpacing: 1.5,
        }}
      >
        संपर्क करें
      </Typography>

      {/* Contact Info & Form */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={5}
        alignItems="center"
        justifyContent="center"
        sx={{ width: '100%', maxWidth: '900px' }}
      >
        {/* Left: Contact Details */}
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            कार्यालय का पता
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            विधायक कार्यालय, हरदोई विधान सभा क्षेत्र, उत्तर प्रदेश, भारत
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            संपर्क करें
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <IconButton>
              <PhoneIcon color="primary" />
            </IconButton>
            <Typography variant="body1">+91 98765 43210</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <IconButton>
              <EmailIcon color="primary" />
            </IconButton>
            <Typography variant="body1">bijendaryadavoffice@gmail.com</Typography>
          </Box>
        </Box>

        {/* Right: Contact Form */}
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Stack spacing={3}>
            <TextField
              label="नाम"
              fullWidth
              variant="outlined"
              color="primary"
              focused
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.dark,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.dark,
                  },
                },
              }}
            />
            <TextField
              label="ईमेल"
              fullWidth
              variant="outlined"
              color="primary"
              focused
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.dark,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.dark,
                  },
                },
              }}
            />
            <TextField
              label="संदेश"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              color="primary"
              focused
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.dark,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.dark,
                  },
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              भेजें
            </Button>
          </Stack>
        </Box>
      </Stack>

      {/* Divider */}
      <Divider sx={{ my: 6, width: '60%', mx: 'auto' }} />

      {/* Footer */}
      <Box textAlign="center">
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Bijendar Yadav | Powered by{' '}
          <a
            href="https://wictronix.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#1976d2' }}
          >
            Wictronix
          </a>
        </Typography>
      </Box>
    </Box>
  )
}
