import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './Home.css';
import vg from '../../assets/images/bg.png';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="Welcome to Streamway" size={'2xl'} />
            <Text children="Streamway is a platform for streaming your favorite movies and TV shows." />
            <Link href="/courses">
              <Button size={'lg'} colorScheme="green">
                Explore Courses 10:31
              </Button>
            </Link>
          </VStack>
          <Image boxSize={'md'} objectFit="contain" src={vg} alt="streamway" />
        </Stack>
      </div>

      <Box>
        <Heading
          textAlign={'center'}
          children="OUR CREATORS"
          fontFamily={'body'}
          color={'yellow.400'}
        />
        <HStack />
      </Box>
    </section>
  );
};

export default Home;
