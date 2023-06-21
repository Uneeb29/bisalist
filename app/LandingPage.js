import { Stack, Typography, Box, Divider } from "@mui/material";
import ServiceCard from "./ServiceCard";

export default function LandingPage() {
  return (
    <Stack direction={"column"} sx={{ mt: 4 }}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            left: "35vw",
            zIndex: "-1",
            opacity: "0.1",
            fontSize: "60px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Fix it services
        </Typography>
        <Typography
          sx={{
            color: "#607d8b",
            fontSize: "30px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          The latest listings
        </Typography>
      </Box>
      <Divider
        sx={{
          mt: 2,
          width: "5rem",
          bgcolor: "#4db4f9",
          alignSelf: "center",
          borderTopWidth: "2px",
          borderRadius: "2px",
          mb: 10,
        }}
      />
      {/* <ServiceCard></ServiceCard> */}
    </Stack>
  );
}
