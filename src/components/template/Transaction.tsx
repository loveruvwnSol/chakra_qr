import { Box } from "@chakra-ui/react";
import { Header } from "../organisms/Header";
import { Qr } from "../organisms/Qr";
import { QrBtn } from "../organisms/QrBtn";

export const Transaction = () => {
  return (
    <Box>
      <Header />
      <Qr />
      <QrBtn />
    </Box>
  );
};
