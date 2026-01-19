import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { FaVk } from 'react-icons/fa6';

const Preheader = () => {
  return (
    <Stack direction="row" h="20">
      <HStack
        cursor="pointer"
        _hover={{
          '& > *': {
            transform: 'translateY(-4px)',
            transition: 'transform 0.2s ease-in-out',
          },
        }}
      >
        <Icon size="xl" color="blue.500">
          <FaVk />
        </Icon>
        <Text fontWeight="bold" fontSize="xl">
          В КОНТАКТЕ
        </Text>
      </HStack>
    </Stack>
  );
};

export default Preheader;
