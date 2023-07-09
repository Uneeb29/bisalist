"use client";
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Input,
  InputAdornment,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
} from "@mui/material";
import { useForm } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SearchIcon from "@mui/icons-material/Search";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import BlockIcon from "@mui/icons-material/Block";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import CreateIcon from "@mui/icons-material/Create";

export default function AddCategories() {
  const { register, handleSubmit, errors } = useForm();

  // creating a simple form that takes a category name and image

  const onSubmit = (data) => {
    // use FileReader to convert the image to base64 and send to backend endpoint

    const reader = new FileReader();

    reader.onload = async function () {
      const img = reader.result;
      const dataToSend = {
        action: "add",
        category: data.name,
        image: img,
      };

      const response = await fetch("/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      console.log("Status Code : ", response.status);

      const res = await response.json();

      console.log("Response : ", res);
    };

    reader.readAsDataURL(data.image[0]);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 14,
      }}
    >
      <Paper
        sx={{
          p: 2,
          borderRadius: "8px",
          width: "95%",
          mb: 5,
          display: "flex",
          flexDirection: "column",
        }}
        id="search"
        elevation={3}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            mb: 2,
            alignSelf: "center",
          }}
        >
          Search Listings
        </Typography>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardAltOutlinedIcon sx={{ color: "#4db4f9" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  sx={{
                    bgcolor: "#334576",
                    color: "white",
                    p: 1,
                    pl: 4,
                    pr: 4,
                    "&:hover": { bgcolor: "#334576" },
                  }}
                >
                  <Typography
                    sx={{ textTransform: "capitalize", fontSize: "14px" }}
                  >
                    Search
                  </Typography>
                  <SearchIcon
                    sx={{ ml: 1, height: "20px", color: "#4db4f9" }}
                  />
                </Button>
              </InputAdornment>
            ),
          }}
          placeholder="Listings..."
          sx={{
            bgcolor: "white",
            borderRadius: "8px",
            width: "100%",
            height: "full",
            mb: 10,
          }}
        ></TextField>
        <Card
          // key={service.title}
          sx={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "30%",
            mb: 4,
            borderRadius: "10px",
            cursor: "pointer",
            height: "400px",
            mr: 3,
            // display:
            //   service.category.name === selectedCategory ||
            //   selectedCategory == "All"
            //     ? "block"
            //     : "none",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="electrician.jpg"
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
              {/* <Box
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
                  </Box> */}
              <Box
                sx={{
                  p: 0.5,
                  borderRadius: "20px",
                  bgcolor: "grey",
                  width: "35%",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "red",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 0.75,
                  }}
                >
                  <BlockIcon
                    sx={{ color: "white", height: "15px", width: "20px" }}
                  ></BlockIcon>
                  <Typography sx={{ color: "white", fontSize: "10px" }}>
                    Block Vendor
                  </Typography>
                </Box>
              </Box>
            </Box>
            <CardContent sx={{}}>
              <Typography gutterBottom variant="h5" component="div">
                Electrician
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
                  location goes here
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignSelf: "center",
            fontSize: "20px",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          New Category
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              mb: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                height: "200px",
                mb: 4,
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                }}
              >
                <Person2Icon sx={{ fontSize: "180px" }}></Person2Icon>
              </Paper>
              <Button
                sx={{
                  borderRadius: "50%",
                  height: "fit-content",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                  boxShadow: "2px 2px 2px 2px #eeeeee",
                  minWidth: "fit-content",
                }}
                component="label"
              >
                <CreateIcon
                  sx={{ fontSize: "20px", color: "black" }}
                ></CreateIcon>
                <input {...register("avi")} type="file" hidden />
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mb: 4,
                width: "45%",
              }}
            >
              <Typography sx={{ fontSize: "14px", mb: 1 }}>
                Category Name
              </Typography>
              <TextField
                size="small"
                placeholder="Category Name"
                variant="standard"
                sx={{
                  bgcolor: "#eeeeee",
                  p: 1,
                  borderRadius: "5px",
                  width: "100%",
                }}
                InputProps={{ disableUnderline: true }}
                {...register("name", { required: true })}
              ></TextField>
            </Box>
          </Box>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Input
              type="submit"
              sx={{
                bgcolor: "#245cbc",
                borderRadius: "5px",
                p: 1,
                color: "white",
                cursor: "pointer",
              }}
              disableUnderline
            />
          </Box>
          {/* <input
            type="text"
            placeholder="Category Name"
            {...register("name", { required: true })}
          /> */}
          {/* <input
            type="file"
            placeholder="Category Image"
            {...register("image", { required: true })}
          /> */}
        </form>
      </Paper>
    </Container>
  );
}
