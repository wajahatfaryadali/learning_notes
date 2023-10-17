import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'

function HeroSection() {
    return (
        <Container>
            <Typography variant='h4' pb={2} pt={4} textAlign={'center'}>
                By Wajahat Faryad Ali.
            </Typography>
            <Box
                component={'div'}

                py={{ xs: 2, md: 2 }}

                display={'flex'}
                flexDirection={{ xs: 'column', md: 'row' }}
                gap={2}
            >
                <Box component={'div'} minWidth={{ md: '50%' }}>
                    <Typography variant='body1'>
                        This is a simple project which i am using to upload my learnings, so i can learn from anywhere.
                    </Typography>
                </Box>
                <Box component={'div'} minWidth={{ md: '50%' }}>
                    <Typography variant='h6' pb={2} pt={{ xs: 2, md: 10 }}>
                        Programming is a 2 steps Process...
                    </Typography>
                    <Typography variant='body1'>
                        First, solve the problem. Then, write the code.
                    </Typography>
                    <Typography variant='caption'>
                        - John Johnson
                    </Typography>
                </Box>
                <Typography>
                </Typography>
            </Box >
        </Container>
    )
}

export default HeroSection