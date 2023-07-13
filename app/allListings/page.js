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
  Divider,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Toolbar,
  ListItemButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// import { set } from "react-hook-form";
export default function AllListings() {
  const searchParams = useSearchParams();

  // a function to fetch all the categories from the backend
  async function fetchCategories() {
    try {
      const res = await fetch("/api/category?action=all");
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  // category is the category of the service (a string)
  async function fetchListings(cat) {
    try {
      // if the url of current page does not contain a category, fetch the services of
      // the category that is selected by the user
      const res = await fetch(`/api/services?category=${cat}`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) =>
      setCategories(() => {
        return ["All", ...data];
      })
    );
    const category = searchParams.get("category");
    console.log("cat : ", category);

    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("All");
    }

    // fetchListings("All").then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetchListings(selectedCategory).then((data) => setServices(data));
  }, [selectedCategory]);

  console.log(categories);

  return (
    <Stack direction={"row"} sx={{ mt: 14 }}>
      {categories.length > 1 && (
        // <Paper
        //   sx={{
        //     display: "flex",
        //     flexDirection: "column",
        //     height: "100%",
        //     p: 2,
        //     bgcolor: "#334576",
        //   }}
        //   elevation={2}
        // >
        //   <Button
        //     sx={{
        //       mt: 0,
        //       backgroundColor:
        //         selectedCategory === "All" ? "#4db4f9" : "transparent",
        //     }}
        //     onClick={() => setSelectedCategory("All")}
        //   >
        //     <Typography
        //       sx={{
        //         color: selectedCategory === "All" ? "#334576" : "white",
        //         textTransform: "capitalize",
        //         "&:hover": { color: "#4db4f9" },
        //       }}
        //     >
        //       All Listings
        //     </Typography>
        //   </Button>
        //   {categories?.map((category, index) => (
        //     <Button
        //       key={index}
        //       sx={{
        //         mt: index != 0 ? 5 : 0,
        //         backgroundColor:
        //           selectedCategory === category.name
        //             ? "#4db4f9"
        //             : "transparent",
        //       }}
        //       onClick={() => {
        //         setSelectedCategory(category.name);
        //       }}
        //     >
        //       <Typography
        //         sx={{
        //           color:
        //             selectedCategory === category.name ? "#334576" : "white",
        //           textTransform: "capitalize",
        //           "&:hover": { color: "#4db4f9" },
        //         }}
        //       >
        //         {category.name}
        //       </Typography>
        //     </Button>
        //   ))}
        // </Paper>
        <Drawer
          sx={{
            width: 250,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 250,
              boxSizing: "border-box",
              mt: 14,
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" noWrap>
              Listings
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {categories.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      )}
      {selectedCategory !== "All" ? (
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {services?.map((service, index) => (
            <Card
              key={service.title}
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
                  service.category.name === selectedCategory ||
                  selectedCategory == "All"
                    ? "block"
                    : "none",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={service.cover}
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
                    {service.category.name}
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
      ) : (
        // if All is selected only display categories
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {categories?.map(
            (category, index) =>
              index !== 0 && (
                <Card
                  key={category.name}
                  sx={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "30%",
                    mb: 4,
                    borderRadius: "10px",
                    cursor: "pointer",
                    height: "400px",
                    mr: 3,
                    display: selectedCategory == "All" ? "block" : "none",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="250"
                      image={category.image}
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
                            sx={{
                              color: "white",
                              height: "15px",
                              width: "20px",
                            }}
                          ></LockOpenRoundedIcon>
                          {/* <Typography sx={{ color: "white", fontSize: "10px" }}>
                        Book Now
                      </Typography> */}
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
                        {/* <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {service.rating}
                    </Typography> */}
                      </Box>
                      {/* <Typography sx={{ color: "white", fontSize: "14px" }}>
                    {service.comments} comments
                  </Typography> */}
                    </Box>
                    <CardContent sx={{}}>
                      <Typography gutterBottom variant="h5" component="div">
                        {category.name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          mb: 3,
                        }}
                      >
                        {/* <LocationOnOutlinedIcon
                      sx={{ color: "#4db4f9", fontSize: "15px", mr: 1 }}
                    ></LocationOnOutlinedIcon> */}
                        {/* <Typography sx={{ fontSize: "12px" }}>
                      {service.location}
                    </Typography> */}
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              )
          )}
        </Container>
      )}
    </Stack>
  );
}
