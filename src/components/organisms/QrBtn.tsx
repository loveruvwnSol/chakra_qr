import { Text, Button, VStack, HStack } from "@chakra-ui/react";
import { BiQr, BiQrScan } from "react-icons/bi";

export const QrBtn = () => {
  return (
    <HStack mt={20} justifyContent="space-around" alignItems="center">
      <Button background="white" boxSize={0}>
        <VStack>
          <BiQr size={50} />
          <Text fontSize={12} fontWeight="bold">
            QRを表示する
          </Text>
        </VStack>
      </Button>
      <Button background="white" boxSize={0}>
        <VStack>
          <BiQrScan size={50} />
          <Text fontSize={12} fontWeight="bold">
            スキャンする
          </Text>
        </VStack>
      </Button>
    </HStack>
  );
};
