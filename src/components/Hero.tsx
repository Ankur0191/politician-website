'use client'

import { Box, Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Typewriter from 'typewriter-effect' // Install this package

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6, // Added some gap for better spacing
        px: { xs: 3, md: 10 },
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        overflow: 'hidden',
        marginTop: '80px', // Added space between Navbar and Hero
      }}
    >
      {/* Tricolor Wave SVG Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Saffron Wave */}
          <path
            d="M0,0 C400,100 1000,0 1440,120 L1440,0 L0,0 Z"
            fill="#FF9933"
            opacity="0.3"
          />
          {/* White Divider (faint for style) */}
          <path
            d="M0,100 C500,200 900,100 1440,220 L1440,120 L0,0 Z"
            fill="#ffffff"
            opacity="0.2"
          />
          {/* Green Wave */}
          <path
            d="M0,200 C600,300 900,200 1440,320 L1440,600 L0,600 Z"
            fill="#138808"
            opacity="0.2"
          />
        </svg>
      </Box>

      {/* Left Text Block */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, zIndex: 1 }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            color: 'primary.main',
            fontWeight: 800,
            lineHeight: 1.2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            display: 'inline-block',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            mb: 2, // Added margin for spacing
          }}
        >
          <Typewriter
            options={{
              strings: ['जय हिंद, जय कांग्रेस'],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: 500,
            color: 'text.secondary',
            maxWidth: 600,
          }}
        >
          एक बेहतर भारत के लिए आपकी आवाज़, हमारी प्रतिबद्धता।
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: '1.15rem',
            color: 'text.secondary',
            maxWidth: 600,
          }}
        >
          जन सेवा ही हमारा धर्म है। भारत को प्रगति और एकता की ओर ले जाने के लिए हम एकजुट हैं।
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
            sx={{
              borderRadius: '999px',
              textTransform: 'none',
              px: 4,
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'translateY(-1px)',
                boxShadow: 3,
              },
            }}
          >
            संपर्क करें
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="/leadership"
            sx={{
              borderRadius: '999px',
              textTransform: 'none',
              px: 4,
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)',
              },
            }}
          >
            हमारी नीति
          </Button>
        </Box>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          mt={4}
          sx={{ fontStyle: 'italic', fontWeight: 400 }}
        >
          “हम भारत को न्याय, समानता और समृद्धि की ओर ले जाने के लिए प्रतिबद्ध हैं。”
        </Typography>
      </motion.div>

      {/* Right Image Block */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: 1, display: 'flex', justifyContent: 'center', zIndex: 1 }}
      >
        <Box
          sx={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '6px solid',
            borderImage: 'linear-gradient(to right, #FF9933, white, #138808) 1',
            boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
            width: { xs: '90%', sm: 400 },
            maxWidth: '100%',
          }}
        >
          <Image
            src="/images/politician-portrait.jpeg"
            alt="Shri Bijendar Yadav Portrait"
            width={400}
            height={500}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
            priority
          />
        </Box>
      </motion.div>
    </Box>
  )
}
