import { chakra } from '@chakra-ui/system'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box width= "100vw" height= "100vh" background= "brand.100" color= "brand.300">
      <Heading>Welcome to Automotive Redesign</Heading>
    </Box>
    
  )
}
