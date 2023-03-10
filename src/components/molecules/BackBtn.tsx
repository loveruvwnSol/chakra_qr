import { Box, IconButton } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

export const BackBtn = () => {
  return (
    <Box>
      <IconButton borderRadius={10} icon={<IoIosArrowBack />} aria-label={""} />
    </Box>
  );
};
