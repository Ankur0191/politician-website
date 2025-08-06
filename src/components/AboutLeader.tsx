'use client'

import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutLeader() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        bgcolor: '#f5faff', // Light Congress blue
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 6,
      }}
    >
      {/* Left: Leader Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
      >
        <Image
          src="/images/bijendar-yadav-portrait.jpg" // ✅ Place your image in /public/images
          alt="Bijendar Yadav"
          width={400}
          height={500}
          style={{
            width: isMobile ? '100%' : 'auto',
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          }}
        />
      </motion.div>

      {/* Right: About Text */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: 1 }}
      >
        <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}>
          हमारे नेता – बिजेन्दर यादव
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem' }}>
          बिजेन्दर यादव, उत्तर प्रदेश से विधायक और कांग्रेस पार्टी के सशक्त नेता, वर्षों से जनता की सेवा कर रहे हैं।
          वे विकास, शिक्षा और स्वास्थ्य में विश्वास रखते हैं, और हर वर्ग की भलाई के लिए प्रतिबद्ध हैं।
        </Typography>

        <Typography variant="body2" sx={{ mb: 4, fontSize: '1rem', color: 'text.secondary' }}>
          • उत्तर प्रदेश विधानसभा में सक्रिय नेतृत्व <br />
          • कांग्रेस पार्टी के समर्पित सदस्य <br />
          • ग्रामीण विकास और युवाओं के सशक्तिकरण में अग्रणी
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href="/about"
          sx={{ textTransform: 'none' }}
        >
          पूरी जीवनी पढ़ें
        </Button>
      </motion.div>
    </Box>
  )
}
