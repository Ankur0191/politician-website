'use client'

import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Stack,
} from '@mui/material'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

// Sample dynamic news data (can be replaced with CMS or API)
const newsItems = [
    {
        id: 1,
        title: 'Bijendar Yadav addresses youth rally in Lucknow',
        excerpt: 'MLA Bijendar Yadav spoke to over 5,000 youth...',
        date: 'Aug 6, 2025',
        slug: '/news/youth-rally-lucknow',
    },
    {
        id: 2,
        title: 'Congress MLA inaugurates new health clinic in Hardoi',
        excerpt: 'The clinic will serve 10,000+ villagers...',
        date: 'Aug 3, 2025',
        slug: '/news/health-clinic-hardoi',
    },
    {
        id: 3,
        title: 'Education reform policy update: Free tablets distributed',
        excerpt: '2,000 students received digital tablets...',
        date: 'Jul 28, 2025',
        slug: '/news/free-tablets-distribution',
    },
]

export default function NewsSection() {
    const controls = useAnimation()

    useEffect(() => {
        controls.start({
            x: ['0%', '-100%'],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: newsItems.length * 5, // speed: 5s per card
                    ease: 'linear',
                },
            },
        })
    }, [controls])

    return (
        <Box
            component="section"
            id="news"
            sx={{
                px: { xs: 0, md: 0 },
                py: { xs: 6, md: 10 },
                bgcolor: 'background.default',
                overflow: 'hidden', // Hide overflow for slider effect
            }}
        >
            {/* Section Title */}
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    mb: 4,
                    fontWeight: 'bold',
                    color: 'primary.main',
                    textAlign: 'center',
                    px: 2,
                }}
            >
                ताज़ा समाचार
            </Typography>

            {/* Sliding Cards Container */}
            <Box
                sx={{
                    width: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    position: 'relative',
                    py: { xs: 2, md: 4 },
                }}
            >
                <motion.div
                    animate={controls}
                    style={{
                        display: 'flex',
                        gap: '32px',
                    }}
                >
                    {[...newsItems, ...newsItems].map((news, index) => (
                        <Card
                            key={`${news.id}-${index}`}
                            elevation={4}
                            sx={{
                                minWidth: '90vw',
                                maxWidth: '90vw',
                                flexShrink: 0,
                                borderRadius: 3,
                                border: '1px solid #ddd',
                                mx: 1,
                                minHeight: { xs: 220, sm: 250, md: 260 }, // more height for all screens
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                px: 2,
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    gutterBottom
                                    sx={{ wordWrap: 'break-word' }}
                                >
                                    {news.date}
                                </Typography>

                                {/* Title will wrap if needed */}
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 600,
                                        color: 'primary.main',
                                        mb: 1,
                                        wordBreak: 'break-word',
                                        whiteSpace: 'normal',
                                    }}
                                >
                                    {news.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
                                >
                                    {news.excerpt}
                                </Typography>
                            </CardContent>

                            <Box sx={{ pb: 2 }}>
                                <Link href={news.slug} passHref>
                                    <Button size="small" variant="outlined" color="primary">
                                        और पढ़ें
                                    </Button>
                                </Link>
                            </Box>
                        </Card>
                    ))}
                </motion.div>
            </Box>

        </Box>
    )
}
