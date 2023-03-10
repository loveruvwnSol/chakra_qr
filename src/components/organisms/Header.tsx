import { Box, Text } from "@chakra-ui/react";
import { BackBtn } from "../molecules/BackBtn";

export const Header = () => {
  return (
    <Box mt={5} display="flex" alignItems="center">
      <Box ml={5}>
        <BackBtn />
      </Box>
      <Box ml={7}>
        <Text textAlign="center" fontSize="4xl" fontWeight="bold">
          Transaction
        </Text>
      </Box>
    </Box>
  );
};
