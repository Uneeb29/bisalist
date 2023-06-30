"use client";

import {
  Stack,
  Typography,
  Divider,
  Box,
  Container,
  Paper,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SearchIcon from "@mui/icons-material/Search";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Aboutus() {
  const containers = [
    {
      bgpic1: "logo.png",
      title1: "About us",
      text1:
        "Our team of experts has years of experience in the construction industry, and we are passionate about bringing innovation and excellence to the field. We believe that technology can be a powerful tool for streamlining processes and improving outcomes, and we are committed to leveraging the latest advances in software and data analytics to make the contractor-client relationship more efficient, effective, and rewarding. At Bisalist, we are focused on creating a platform that is easy to use, intuitive, and accessible to everyone. We believe in the power of collaboration and are dedicated to fostering strong, long-term relationships between contractors and clients based on trust, transparency, and mutual respect. We work tirelessly to ensure that every project is completed to the highest standards of quality and that every client is satisfied with the work performed.",
      bgpic2: "tools.jpeg",
      title2: "BISALIST",
      text2:
        "Whether you are a contractor looking to expand your business, or a client in need of top-quality construction services, Fix IT TT is the go-to destination for all your needs. We are committed to delivering exceptional results and providing an unmatched level of service and support to our clients and contractors alike. Contact us today to learn more about how we can help you achieve your goals.",
    },
    {
      bgpic1: "Plumber.jpg",
      title1: "",
      text1:
        "Reliable Plumbing Solutions: Trust our expertise for all your plumbing needs. From repairs to installations, we provide top-notch service with a commitment to excellence. Experience peace of mind with our skilled plumbers at your service.",
      bgpic2: "electrician.jpg",
      title2: "",
      text2:
        "Electrical Excellence at Your Service: Our skilled electricians deliver top-quality solutions for all your electrical needs. From installations to repairs, we ensure safety and efficiency. Trust our expertise to keep your home or business powered up and running smoothly.",
    },
  ];
  const qualities = [
    {
      icon: <LockOpenIcon sx={{ fontSize: "100px", color: "white" }} />,
      heading: "Tell us what your home needs",
      text: "From routine maintenance and repairs to dream home renovations, we can help with any project — big or small.",
    },
    {
      icon: <SearchIcon sx={{ fontSize: "100px", color: "white" }} />,
      heading: "Custom solutions that match your needs",
      text: "Instantly access pricing and book services, or alternatively, request and compare quotes from top-rated professionals in your vicinity.",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: "100px", color: "white" }} />,
      heading: "Start to finish, we've got you covered",
      text: "When you book and pay with BisaList, you’re covered by our Happiness Guarantee.",
    },
  ];
  return (
    <Stack direction={"column"}>
      <Stack
        sx={{
          backgroundImage: 'url("aboutus.jpg")',
          backgroundSize: "cover",
          height: "75vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 0,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
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
          ABOUT US
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#607d8b",
            fontSize: "30px",
            fontWeight: "bold",
            textTransform: "capitalize",
            mb: 1,
          }}
        >
          How it works
        </Typography>
        <Divider
          sx={{
            mt: 3,
            width: "3rem",
            bgcolor: "#4db4f9",
            borderTopWidth: "2px",
            borderRadius: "2px",
            mb: 14,
          }}
        />
      </Box>
      {containers.map((container, index) => (
        <Box sx={{ mb: 30 }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "55vh",
              mb: 20,
            }}
          >
            <Paper
              elevation={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "50%",
                height: "80%",
                mr: 4,
                mt: 3,
                borderRadius: "16px",
              }}
            >
              <img
                src={container.bgpic1}
                style={{ width: "100%", borderRadius: "16px" }}
              />
            </Paper>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#607d8b",
                  fontSize: "22px",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {container.title1}
              </Typography>
              <Divider
                sx={{
                  mt: 3,
                  width: "4rem",
                  bgcolor: "#4db4f9",
                  borderTopWidth: "2px",
                  borderRadius: "2px",
                  mb: 6,
                  display: index == 0 ? "block" : "none",
                }}
              />
              <Box
                sx={{ height: "100%", display: "flex", alignItems: "center" }}
              >
                <Typography sx={{ fontSize: "14px", ml: 4 }}>
                  {container.text1}
                </Typography>
              </Box>
            </Box>
          </Container>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "55vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "45%",
                mr: 4,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#607d8b",
                  fontSize: "22px",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {container.title2}
              </Typography>
              <Divider
                sx={{
                  mt: 3,
                  width: "4rem",
                  bgcolor: "#4db4f9",
                  borderTopWidth: "2px",
                  borderRadius: "2px",
                  mb: 6,
                  display: index == 0 ? "block" : "none",
                }}
              />
              <Box
                sx={{ height: "100%", display: "flex", alignItems: "center" }}
              >
                <Typography sx={{ fontSize: "14px", ml: 4 }}>
                  {container.text2}
                </Typography>
              </Box>
            </Box>
            <Paper
              elevation={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "50%",
                height: "80%",
                mt: 3,
                borderRadius: "16px",
              }}
            >
              <img
                src={container.bgpic2}
                style={{ width: "100%", borderRadius: "16px" }}
              />
            </Paper>
          </Container>
        </Box>
      ))}
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mb: 20,
        }}
      >
        {qualities.map((quality, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "30%",
            }}
          >
            <Box
              sx={{
                borderRadius: "10px",
                bgcolor: "#4db4f9",
                width: "35%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
              }}
            >
              {quality.icon}
            </Box>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", mb: 2 }}>
              {quality.heading}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{quality.text}</Typography>
          </Box>
        ))}
      </Container>
    </Stack>
  );
}
