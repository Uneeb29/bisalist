"use client";

import {
  Stack,
  Box,
  Container,
  Typography,
  CardContent,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
  Paper,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useState } from "react";
export default function AllListings() {
  const services = [
    "All",
    "Electrician",
    "Plumber",
    "Masonry",
    "Carpenter",
    "Painter",
  ];

  const listOfServices = [
    {
      title: "Event Planning1",
      category: "Events",
      backgroundImage: "eventManagement.jpg",
      comments: 7,
      rating: 4.4,
      location: "St 178, Greater Accra, GA South",
    },
    {
      title: "Event Planning2",
      category: "Events",
      backgroundImage: "eventManagement.jpg",
      comments: 3,
      rating: 3.9,
      location: "St 178, Greater Accra, GA South",
    },
    {
      title: "Masonry1",
      category: "Masonry",
      backgroundImage: "masonry.jpg",
      comments: 4,
      rating: 4.3,
      location: "St 178, Greater Accra, GA South",
    },
    {
      title: "Masonry2",
      category: "Masonry",
      backgroundImage: "masonry.jpg",
      comments: 2,
      rating: "4.0",
      location: "St 178, Greater Accra, GA South",
    },
    {
      title: "Plumber1",
      category: "Plumber",
      backgroundImage: "Plumber.jpg",
      comments: 10,
      rating: 4.4,
      location: "St 178, Greater Accra, GA South",
    },
    {
      title: "Plumber2",
      category: "Plumber",
      backgroundImage: "Plumber.jpg",
      comments: 7,
      rating: 4.9,
      location: "St 178, Greater Accra, GA South",
    },
  ];

  const [selectedService, setSelectedService] = useState("All");

  return (
    <Stack direction={"row"} sx={{ mt: 14 }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: 2,
          bgcolor: "#334576",
        }}
        elevation={2}
      >
        {services.map((service, index) => (
          <Button
            sx={{
              mt: index != 0 ? 5 : 0,
              backgroundColor:
                selectedService === service ? "#4db4f9" : "transparent",
            }}
            onClick={() => setSelectedService(service)}
          >
            <Typography
              sx={{
                color: selectedService === service ? "#334576" : "white",
                textTransform: "capitalize",
                "&:hover": { color: "#4db4f9" },
              }}
            >
              {service}
            </Typography>
          </Button>
        ))}
      </Paper>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {listOfServices.map((service, index) => (
          <Card
            key={index}
            sx={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "30%",
              mb: 4,
              borderRadius: "10px",
              cursor: "pointer",
              height: "400px",
              mr: 3,
              display:
                service.category === selectedService || selectedService == "All"
                  ? "block"
                  : "none",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={service.backgroundImage}
              ></CardMedia>

              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  zIndex: 1,
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#334576",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    p: 0.6,
                    cursor: "pointer",
                    height: "fit-content",
                  }}
                >
                  <FavoriteBorderIcon
                    sx={{
                      color: "white",
                      height: "20px",
                      "&:hover": {
                        color: "#4db4f9",
                      },
                    }}
                  ></FavoriteBorderIcon>
                </Box>
                <Box
                  sx={{
                    p: 0.5,
                    borderRadius: "20px",
                    bgcolor: "grey",
                    width: "30%",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#1de9b6",
                      borderRadius: "16px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: 0.75,
                    }}
                  >
                    <LockOpenRoundedIcon
                      sx={{ color: "white", height: "15px", width: "20px" }}
                    ></LockOpenRoundedIcon>
                    <Typography sx={{ color: "white", fontSize: "10px" }}>
                      Book Now
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 190,
                  left: 10,
                  zIndex: 1,
                  width: "90%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    p: 1.25,
                    bgcolor: "#334576",
                    borderRadius: "5px",
                    mr: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {service.rating}
                  </Typography>
                </Box>
                <Typography sx={{ color: "white", fontSize: "14px" }}>
                  {service.comments} comments
                </Typography>
              </Box>
              <CardContent sx={{}}>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <LocationOnOutlinedIcon
                    sx={{ color: "#4db4f9", fontSize: "15px", mr: 1 }}
                  ></LocationOnOutlinedIcon>
                  <Typography sx={{ fontSize: "12px" }}>
                    {service.location}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Container>
    </Stack>
  );
}
