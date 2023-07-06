import {
  Box,
  Container,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import DoneIcon from "@mui/icons-material/Done";
import Link from "next/link";

export default function ServiceCard() {
  const cards = [
    {
      title: "Electrician",
      category: "Electrician",
      backgroundImage: "electrician.jpg",
      createdBy: "By, admin",
      createdByPicture: "picture.jpg",
    },
    {
      title: "Masonry",
      category: "Masonry",
      backgroundImage: "masonry.jpg",
      createdBy: "By, admin",
      createdByPicture: "picture.jpg",
    },
    {
      title: "Event Planning",
      category: "Events",
      backgroundImage: "eventManagement.jpg",
      createdBy: "By, admin",
      createdByPicture: "picture.jpg",
    },
  ];

  return (
    <Container sx={{ display: "flex", flexDirection: "row" }}>
      {cards.map((card, index) => (
        <Link
          key={index}
          // style={{
          //   backgroundImage: `url("${card.backgroundImage}")`,
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   width: "35%",
          //   mr: 3.5,
          //   borderRadius: "10px",
          //   cursor: "pointer",
          // }}
          href={{
            pathname: "/allListings",
            query: {
              category: card.title,
            },
          }}
        >
          <Card
            key={index}
            sx={{
              backgroundImage: `url("${card.backgroundImage}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "35%",
              mr: 3.5,
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <CardContent>
              <Stack direction={"column"}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mb: 10,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#334576",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      height: "30px",
                      width: "30px",
                      justifyContent: "center",
                      alignItems: "center",
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
                      width: "32%",
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
                      <Typography sx={{ color: "white", fontSize: "12px" }}>
                        Book Now
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{ color: "white", fontWeight: "bold", mr: 2 }}
                  >
                    {card.title}
                  </Typography>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      bgcolor: "#1de9b6",
                      width: "5%",
                      height: "15%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DoneIcon
                      sx={{ color: "white", height: "15px", width: "15px" }}
                    ></DoneIcon>
                  </Box>
                </Box>
                <Divider sx={{ bgcolor: "white", mb: 2 }}></Divider>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography sx={{ color: "white", mr: 2, fontSize: "14px" }}>
                    {card.category}
                  </Typography>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      height: "20px",
                      width: "20px",
                      backgroundImage: `url("${card.createdByPicture}")`,
                      mr: 2,
                    }}
                  ></Box>
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    {card.createdBy}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Container>
  );
}
