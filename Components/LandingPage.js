import { Stack, Typography, Box, Divider } from "@mui/material";
import ServiceCard from "../Components/ServiceCard";

export default function LandingPage() {
  return (
    <Stack direction="column" sx={{ mt: 7 }}>
      <Box
        sx={{
          textAlign: "center",
          display: "grid",
          placeItems: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "60px",
            fontWeight: "bold",
            textTransform: "capitalize",
            color: "rgba(0, 0, 0, 0.1)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          Fix it services
        </Typography>
        <Typography
          variant="h2"
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
      {/* <ServiceCard /> */}
    </Stack>
  );
}
