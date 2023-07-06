import {
  Box,
  Divider,
  Stack,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Translate } from "@mui/icons-material";

export default function PopularPlaces() {
  const cards = [
    {
      title: "Plumber",
      backgroundImage: "Plumber.jpg",
      location: "St 178, Greater Accra, GA South",
    },
    {
      title: "Masonry",
      backgroundImage: "masonry.jpg",
      location: "St 178, Greater Accra, GA South",
    },
    {
      title: "Event Planning",
      backgroundImage: "eventManagement.jpg",
      location: "St 178, Greater Accra, GA South",
    },
  ];
  return (
    <Stack direction="column" sx={{ mt: 7 }}>
      <Box
        sx={{
          textAlign: "center",
          display: "grid",
          placeItems: "center",
          position: "relative",
          mb: 10,
        }}
      >
        {/* <Typography
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
          Best Listings
        </Typography> */}
        <Typography
          variant="h2"
          sx={{
            color: "#607d8b",
            fontSize: "30px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Most Popular Places
        </Typography>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {cards.map((card, index) => (
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
              mr: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={card.backgroundImage}
              ></CardMedia>

              {/* <Box
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
                    {card.rating}
                  </Typography>
                </Box>
                <Typography sx={{ color: "white", fontSize: "14px" }}>
                  {card.comments} comments
                </Typography>
              </Box> */}
              <Link
                sx={{ color: "black" }}
                underline="none"
                href={{ pathname: `/allList ings?category=${card.title}` }} 
              >
                <CardContent sx={{}}>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
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
                      {card.location}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        ))}
      </Container>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link href="/allListings" underline="none">
          <Button
            sx={{
              color: "white",
              bgcolor: "#334576",
              borderRadius: "25px",
              p: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              "&:hover": { bgcolor: "#334576" },
              mb: 22,
            }}
          >
            <Typography
              sx={{
                mr: 1,
                textTransform: "capitalize",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              Check Out All Listings
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ArrowForwardOutlinedIcon
                sx={{ color: "#4db4f9" }}
              ></ArrowForwardOutlinedIcon>
            </Box>
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: 6,
        }}
      >
        <Typography
          sx={{ color: "#4db4f9", fontSize: "35px", fontWeight: "bold", mb: 3 }}
        >
          Looking for a professional touch?
        </Typography>
        <Divider
          sx={{
            mb: 3,
            bgcolor: "gray",
            width: "25%",
          }}
          variant="middle"
        />
        <Typography>
          Choose from our amazing packages designed to meet your needs.
        </Typography>
      </Box>
      {/* <ServiceCard /> */}
    </Stack>
  );
}
