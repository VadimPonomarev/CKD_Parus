import { Box, Center, HStack, Image, Stack, Text } from '@chakra-ui/react';
import HeaderPicture from '@/img/HeaderPicture.jpg';

const Headerpicture = () => {
  return (
    <HStack width="100%" height="200px" justify="space-around">
      <Image
        src={HeaderPicture.src}
        alt="Header"
        objectFit="contain"
        borderRadius="20px"
        // width="100%"
        height="100%"
      />
      <Center w="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Официальный сайт Центра культуры и досуга "Парус" города Советск
        </Text>
      </Center>
    </HStack>
  );
};

export default Headerpicture;
