'use client';

import { Box, Stack } from '@chakra-ui/react';
import Preheader from '@/components/preheader/preheader';
import Headerpicture from '@/components/headerpicture/headerpicture';
import HeaderMenu from '@/components/menu/headermenu';
import Poster from '@/components/poster/poster';
import News from '@/components/news/news';

export default function Home() {
  return (
    <Box minH="100vh" mx={20}>
      <Preheader />
      <Headerpicture />
      <HeaderMenu />
      <Stack gap={20} pt={20}>
        <Poster />
        <News />
      </Stack>
    </Box>
  );
}
