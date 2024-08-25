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
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';

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
                Explore Courses
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            objectFit="contain"
            src={vg}
            alt="streamway"
          />
        </Stack>
      </div>

      <Box padding={8} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          children="OUR CREATORS"
          fontFamily={'body'}
          color={'yellow.400'}
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop={'5'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          autoPlay
          controls
          src={introVideo}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};

export default Home;
