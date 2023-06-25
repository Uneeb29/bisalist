import { Box, Container, Typography, Paper } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        pb: 4,
      }}
      elevation={4}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            justifyContent: "start",
            alignItems: "start",
            ml: 8,
            mb: 4,
          }}
        >
          <Box height={"40%"} sx={{ mt: 2, mb: 4 }}>
            <img src="logo1.png" style={{ height: "100%", width: "60%" }}></img>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mb: 3,
            }}
          >
            <LocationOnOutlinedIcon
              sx={{ color: "#334576", fontSize: "20px", mr: 1 }}
            ></LocationOnOutlinedIcon>
            <Typography
              sx={{
                fontSize: "16px",
                color: "grey",
                cursor: "pointer",
                "&:hover": { color: "#334576" },
              }}
            >
              16 Manhia Street, Abelenkpe
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mb: 3,
            }}
          >
            <EmailOutlinedIcon
              sx={{ color: "#334576", fontSize: "20px", mr: 1 }}
            ></EmailOutlinedIcon>
            <Typography
              sx={{
                fontSize: "16px",
                color: "grey",
                cursor: "pointer",
                "&:hover": { color: "#334576" },
              }}
            >
              info@bisalist.com
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "bold", mt: 4, mb: 3 }}
          >
            Company
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "grey",
              cursor: "pointer",
              "&:hover": { color: "#334576", textDecoration: "underline" },
              mb: 2,
            }}
          >
            Terms & Conditions
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "grey",
              cursor: "pointer",
              "&:hover": { color: "#334576", textDecoration: "underline" },
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          ml: 8,
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <CopyrightOutlinedIcon
            sx={{ fontSize: "18px", mr: 1 }}
          ></CopyrightOutlinedIcon>
          <Typography sx={{ fontSize: "16px", mr: 0.5 }}>
            2021 Bisalist. All Rights Reserved by
          </Typography>
          <Typography
            sx={{
              color: "#334576",
              cursor: "pointer",
              "&:hover": { color: "black", textDecoration: "underline" },
            }}
          >
            Bisalist
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <FacebookOutlinedIcon
            sx={{
              color: "#334576",
              fontSize: "20px",
              mr: 2.5,
              cursor: "pointer",
            }}
          ></FacebookOutlinedIcon>
          <TwitterIcon
            sx={{
              color: "#334576",
              fontSize: "20px",
              mr: 2.5,
              cursor: "pointer",
            }}
          ></TwitterIcon>
          <InstagramIcon
            sx={{ color: "#334576", fontSize: "20px", cursor: "pointer" }}
          ></InstagramIcon>
        </Box>
      </Box>
    </Paper>
  );
}
