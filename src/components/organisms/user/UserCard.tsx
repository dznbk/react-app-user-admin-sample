import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  image: string;
  userName: string;
  fullName: string;
  onClick: () => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { userName, fullName, image, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClick}
    >
      <Stack text-align="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={image}
          alt={userName}
          m="auto"
        />
        <Text font="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text font="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
