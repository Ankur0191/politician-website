'use client'

import { Box, Typography, Button, Stack } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

export default function CongressPartySection() {
  return (
    <Box
      component="section"
      id="congress"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 10 },
        bgcolor: '#F5F5F5',
        textAlign: 'center',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {/* Congress Logo */}
        <Box sx={{ maxWidth: 120 }}>
          <Image
            src="/congree-logo.png" // place congress logo in /public folder
            alt="Congress Party Logo"
            width={120}
            height={120}
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* Text and Button */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: 'primary.main',
              mb: 2,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Indian National Congress
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: 'text.secondary',
              maxWidth: 500,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Bijendar Yadav is a proud member and elected representative under the Indian National Congress, committed to its values of secularism, equality, and progress.
          </Typography>

          <Link
            href="https://www.inc.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary">
              Visit Congress Website
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  )
}
