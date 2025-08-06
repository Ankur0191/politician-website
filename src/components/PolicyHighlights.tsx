'use client';

import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  CardActions,
  Button,
  useMediaQuery,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

// Define type for policy items
const policies = [
  {
    title: 'Education',
    description: 'Empowering youth with quality and inclusive education.',
    icon: <SchoolIcon sx={{ fontSize: 40, color: '#0A802F' }} />,
    link: '/leadership-policy#education',
  },
  {
    title: 'Health',
    description: 'Accessible and affordable healthcare for every citizen.',
    icon: <LocalHospitalIcon sx={{ fontSize: 40, color: '#0A802F' }} />,
    link: '/leadership-policy#health',
  },
  {
    title: 'Youth & Employment',
    description: 'Skill development and job opportunities for youth.',
    icon: <EmojiPeopleIcon sx={{ fontSize: 40, color: '#0A802F' }} />,
    link: '/leadership-policy#youth',
  },
  {
    title: 'Agriculture',
    description: 'Supporting farmers with modern tools and fair policies.',
    icon: <AgricultureIcon sx={{ fontSize: 40, color: '#0A802F' }} />,
    link: '/leadership-policy#agriculture',
  },
  {
    title: 'Infrastructure',
    description: 'Building roads, connectivity, and digital future.',
    icon: <EngineeringIcon sx={{ fontSize: 40, color: '#0A802F' }} />,
    link: '/leadership-policy#infrastructure',
  },
];

const PolicyHighlights = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="policy-highlights"
      sx={{
        px: { xs: 2, sm: 6, md: 12 },
        py: 8,
        backgroundColor: '#F9F9F9',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#0A802F"
        textAlign="center"
        mb={4}
      >
        हमारे मुख्य उद्देश्य / Key Focus Areas
      </Typography>

      {/* Cards container using Flexbox */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        {policies.map((policy, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: '100%', sm: '45%', md: '30%' },
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 3,
              borderRadius: 3,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                {policy.icon}
                <Typography variant="h6" fontWeight="600">
                  {policy.title}
                </Typography>
              </Stack>
              <Typography color="text.secondary">{policy.description}</Typography>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
              <Link href={policy.link} passHref>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    color: '#0A802F',
                    borderColor: '#0A802F',
                    '&:hover': {
                      backgroundColor: '#0A802F',
                      color: 'white',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PolicyHighlights;
