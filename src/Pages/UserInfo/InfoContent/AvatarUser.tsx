import { Box, Stack, Typography } from "@mui/material";
import { RootState } from "configStore";
import { useSelector } from "react-redux";

type Props = {};

const AvatarUser = (props: Props) => {
  const { infoUser } = useSelector((state: RootState) => state.auth);

  return (
    <Stack p={4} direction="column" alignItems="center" height="100%">
      <Box sx={{ borderRadius: "50%", overflow: "hidden" }}>
        <img
          src="https://i.pravatar.cc"
          alt="https://i.pravatar.cc"
          width="100%"
        />
      </Box>
      <Typography mt={3} variant="h5">
        {infoUser?.hoTen}
      </Typography>
    </Stack>
  );
};

export default AvatarUser;
