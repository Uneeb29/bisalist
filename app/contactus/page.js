"use client";
import {
  Stack,
  Container,
  Box,
  Typography,
  Divider,
  TextField,
  FormControl,
  Button,
  Link,
} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useEffect } from "react";

export default function Contactus() {
  useEffect(() => {
    document.body.style.margin = "0"; // Add this line to remove body margin
  }, []);
  return (
    <Stack direction={"column"}>
      <Stack
        sx={{
          backgroundImage: 'url("contactus.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "75vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          zIndex: 0,
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100vw",
            height: "75vh",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: -1,
          },
          mb: 14,
        }}
      >
        <Typography
          sx={{ fontSize: "34px", fontWeight: "bold", color: "white" }}
        >
          Our Contacts
        </Typography>
        <Divider
          sx={{
            mt: 3,
            width: "4rem",
            bgcolor: "#4db4f9",
            alignSelf: "center",
            borderTopWidth: "2px",
            borderRadius: "2px",
            mb: 14,
          }}
        />
      </Stack>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "26px", fontWeight: "bold", mb: 8 }}>
          Contact us
        </Typography>
        <FormControl>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>Name</Typography>
            <TextField sx={{ width: "50%" }} variant="outlined" size="small" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>Email</Typography>
            <TextField sx={{ width: "50%" }} variant="outlined" size="small" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              Paragraph Text
            </Typography>
            <TextField
              sx={{ width: "90%" }}
              variant="outlined"
              size="small"
              multiline
              rows={4}
            />
          </Box>
          <Button
            type="submit"
            sx={{ p: 1.5, bgcolor: "#334576", width: "fit-content", mb: 6 }}
          >
            <Typography sx={{ color: "white", textTransform: "capitalize" }}>
              Submit
            </Typography>
          </Button>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Typography sx={{ fontSize: "34px", fontWeight: "bold" }}>
            Social Media Links
          </Typography>
          <Box>
            <Link sx={{ cursor: "pointer" }}>
              <FacebookOutlinedIcon sx={{ fontSize: "34px", mr: 3 }} />
            </Link>
            <Link sx={{ cursor: "pointer" }}>
              <TwitterIcon sx={{ fontSize: "34px", mr: 3 }} />
            </Link>
            <Link sx={{ cursor: "pointer" }}>
              <InstagramIcon sx={{ fontSize: "34px", mr: 2 }} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
}
