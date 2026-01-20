import { HStack, Image, Link, Stack, Text } from '@chakra-ui/react';
import Cultura from '@/img/min_kulturi.jpg';
const Links = () => {
  return (
    <Stack width="100%" position="relative">
      <Text fontSize="2xl" fontWeight="bold">
        Полезные ссылки
      </Text>
      <HStack width="100%">
        <Link>
          <Image
            src={Cultura.src}
            alt="Header"
            objectFit="contain"
            borderRadius="20px"
            width="100%"
            height="100%"
          />
        </Link>
      </HStack>
    </Stack>
  );
};

export default Links;
