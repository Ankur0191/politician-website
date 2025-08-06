'use client'

import { Box, Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
        gap: 4,
        px: { xs: 2, md: 10 },
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        overflow: 'hidden',
      }}
    >
      {/* Background Tricolor Texture */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: `
            radial-gradient(circle at 30% 30%, rgba(255,153,51,0.06), transparent),
            radial-gradient(circle at 70% 70%, rgba(19,136,8,0.06), transparent)
          `,
        }}
      />

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
          }}
        >
          जय हिंद, जय कांग्रेस 🇮🇳
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

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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
            📞 संपर्क करें
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
            📃 हमारी नीति
          </Button>
        </Box>

        {/* Optional Quote */}
        <Typography
          variant="subtitle1"
          color="text.secondary"
          mt={4}
          sx={{ fontStyle: 'italic', fontWeight: 400 }}
        >
          “हम भारत को न्याय, समानता और समृद्धि की ओर ले जाने के लिए प्रतिबद्ध हैं।”
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
            alt="Shri [Name] Portrait"
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
