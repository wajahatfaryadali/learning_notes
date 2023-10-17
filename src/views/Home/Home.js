import React from 'react'
import HeroSection from '../../components/home/HeroSection'
import StatsCard from '../../components/home/StatsCard'
import { Box } from '@mui/material'

function Home() {
  return (
    <div>
      <HeroSection />
      <Box component={'div'} sx={{ padding: "2px", background: "#EB984E" }} maxWidth={{ xs: "80%", md: "50%" }} margin={"auto"} mt={2} mb={2} borderRadius={"100%"}/>
      <StatsCard />
    </div>
  )
}

export default Home