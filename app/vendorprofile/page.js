"use client";

import { Container, Box, Typography, Paper, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
const IconRow = ({ iconCount }) => {
  const icons = [];

  for (let i = 0; i < iconCount; i++) {
    icons.push(<StarOutlinedIcon key={i} />); // Replace `IconName` with the specific Material-UI icon component
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        mr: 2,
        color: "gold",
        alignItems: "center",
      }}
    >
      {icons}
      <Typography sx={{ fontSize: "20px", fontWeight: "bold", ml: 1 }}>
        {iconCount}
      </Typography>
    </Box>
  );
};

export default function VendorProfile() {
  return (
    <Container sx={{ display: "flex", flexDirection: "row", mt: 16 }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          mr: 4,
          p: 4,
          borderRadius: "10px",
        }}
        elevation={3}
      >
        <Typography sx={{ fontSize: "26px", fontWeight: "bold", mb: 2 }}>
          We will provide xyz service
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mb: 3,
          }}
        >
          <IconRow iconCount={4} />
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            (150)
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", width: "100%", mb: 4 }}
        >
          <Box
            sx={{
              width: "14%",
              borderRadius: "50%",
              backgroundImage: 'url("picture.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              mr: 3,
            }}
          ></Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 2 }}>
              Username
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mb: 2,
              }}
            >
              <LocationOnOutlinedIcon
                sx={{ fontSize: "18px", color: "#334576", mr: 1 }}
              />
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                City
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            Title of Service Goes Here
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            Service Details Go Here Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam
          </Typography>
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={{ display: "flex", flexDirection: "column", width: "30%", p: 2 }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography sx={{ fontSize: "22px" }}>Basic</Typography>
          <Typography sx={{ fontSize: "22px" }}>$5</Typography>
        </Box>
        <Typography sx={{ fontSize: "14px", mb: 2 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mb: 4,
          }}
        >
          <AccessTimeIcon sx={{ fontSize: "16px", mr: 1 }} />
          <Typography sx={{ fontSize: "16px" }}>Service in 3 days</Typography>
        </Box>
        <Button
          sx={{
            bgcolor: "#334576",
            color: "white",
            "&:hover": { bgcolor: "#334576" },
          }}
        >
          <Typography>Hire Now</Typography>
        </Button>
      </Paper>
    </Container>
  );
}
