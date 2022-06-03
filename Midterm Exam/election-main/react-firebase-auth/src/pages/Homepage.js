import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'


export default function Homepage() {
  

  return (
    <Layout>
      <Heading>
  <img src="/images/source.png"alt=""/>
        <Badge
          fontWeight='black'
          fontSize='20xl'
          mx={5}
          px={5}
          colorScheme='green'
        >
          S O U R C E

        </Badge>
        
        ELECTION SYSTEM
        <chakra.span
          fontWeight='black'
          fontStyle='italic'
          fontSize='9xl'
          mx={2}
        >        
        </chakra.span>
         
      </Heading>
    </Layout>
  )

  
}
