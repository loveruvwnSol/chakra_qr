import { Box, Flex, Image } from "@chakra-ui/react";
import QR from "../../images/chakra_qr_qrcode.png";

export const Qr = () => {
  return (
    <Box mt={10}>
      <Flex
        justifyContent="center"
        ml={5}
        mr={5}
        borderRadius={10}
        p={10}
        bgGradient="linear(to-r,purple.200,  lightblue)"
      >
        <Image src={QR} borderRadius={20} />
      </Flex>
    </Box>
  );
};
