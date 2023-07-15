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
  Link,
} from "@mui/material";
import { set, useForm } from "react-hook-form";
import DoneIcon from "@mui/icons-material/Done";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SearchIcon from "@mui/icons-material/Search";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import BlockIcon from "@mui/icons-material/Block";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateIcon from "@mui/icons-material/Create";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function AddCategories() {
  const [editService, setEditService] = useState("listings");
  const searchParams = useSearchParams();
  const { register, handleSubmit, errors } = useForm();
  // for another form
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

  const [listings, setListings] = useState([]);

  // creating a simple form that takes a category name and image

  const onSubmit = (data) => {
    // use FileReader to convert the image to base64 and send to backend endpoint

    const reader = new FileReader();

    reader.onload = async function () {
      const img = reader.result;
      const dataToSend = {
        action: "add",
        category: data.name,
        description: data.description,
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

  async function onSearch(data) {
    console.log("searching");

    const searchItem = document.getElementById("search").value;

    console.log(searchItem);

    const response = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search: data.search }),
    });

    console.log("Status Code : ", response.status);

    const res = await response.json();

    console.log("Response : ", res);

    setListings(res);
  }

  useEffect(() => {
    console.log("listings: ", listings);
  }, [listings]);

  async function fetchCategories() {
    try {
      const res = await fetch("/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "fetchAll",
        }),
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchListings() {
    try {
      // if the url of current page does not contain a category, fetch the services of
      // the category that is selected by the user
      const res = await fetch(`/api/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          action: "fetchAll",
        }),
      });
      const data = await res.json();
      // console.log(data);
      console.log("YE HAI DATA: ", data);
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

    // if (category) {
    //   setSelectedCategory(category);
    // } else {
    //   setSelectedCategory("All");
    // }

    // fetchListings("All").then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetchListings().then((data) => setServices(data));
  }, []);

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
          }}
        >
          Admin
        </Typography>
        {/* START */}

        <form onSubmit={handleSubmit2(onSearch)}>
          <TextField
            {...register2("search", { required: true })}
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
                    type="submit"
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
            placeholder="Search by title, company name, vendor name"
            sx={{
              bgcolor: "white",
              borderRadius: "8px",
              width: "100%",
              height: "full",
              mb: 10,
            }}
          ></TextField>
        </form>
        {/* START */}

        {listings.map((service) => {
          return (
            <Card
              key={service.companyName}
              sx={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "30%",
                mb: 4,
                borderRadius: "10px",
                cursor: "pointer",
                height: "400px",
                mr: 3,
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
                      p: 0.5,
                      borderRadius: "20px",
                      bgcolor: "grey",
                      width: "35%",
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
                        display: "none",
                      }}
                    >
                      <DoneIcon
                        sx={{ color: "white", height: "15px", width: "20px" }}
                      ></DoneIcon>
                      <Typography sx={{ color: "white", fontSize: "10px" }}>
                        Unblock Vendor
                      </Typography>
                    </Box>
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
                    {service.vendor.firstname + " " + service.vendor.lastname}
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
                    {service.vendor.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
        {/* END */}
      </Paper>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          borderRadius: "10px",
          width: "95%",
          display: editService == "listings" ? "flex" : "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
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
            Edit Categories
          </Typography>
          <Button
            sx={{ bgcolor: "#334576", "&:hover": { bgcolor: "#334576" }, p: 1 }}
            onClick={() => {
              setEditService("new");
            }}
          >
            <Typography sx={{ textTransform: "capitalize", color: "white" }}>
              Create new category
            </Typography>
          </Button>
        </Box>
        {/* {services?.map((service) => ( */}
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
          onClick={() => {
            setEditService("edit");
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={"electrician.jpg"}
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
                    bgcolor: "#1de9b6",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 0.75,
                  }}
                >
                  <CreateIcon
                    sx={{ color: "white", height: "15px", width: "20px" }}
                  ></CreateIcon>
                  <Typography sx={{ color: "white", fontSize: "10px" }}>
                    Edit Service
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* <Box
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
                > */}
            {/* <Box
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
                </Box> */}
            <CardContent sx={{}}>
              <Typography gutterBottom variant="h5" component="div">
                {"Electrician"}
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
                  {"service.location"}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <Box
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
                  width: "30%",
                  height: "200px",
                  borderRadius:"16px"
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
                <input
                  {...register("image", { required: true })}
                  type="file"
                  hidden
                />
              </Button>
            </Box>
            <Box sx={{display:"flex", flexDirection:"row"}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mb: 4,
                width: "45%",
                mr:4
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mb: 4,
                width: "45%",
              }}
            >
              <Typography sx={{ fontSize: "14px", mb: 1 }}>
                Category Description
              </Typography>
              <TextField
                size="small"
                placeholder="Description"
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
          </Box> */}
          {/* <Box
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
                "&:hover": { bgcolor: "#245cbc", cursor:"pointer" },
              }}
              disableUnderline
              value={"Add Category"}
            />
          </Box> */}
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
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          borderRadius: "10px",
          width: "95%",
          display: editService == "edit" ? "flex" : "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
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
            Edit Category
          </Typography>
          <Link href="/admin" underline="none">
            <ArrowBackIcon
              sx={{
                mt: 2,
                fontSize: "30px",
                color: "#245cbc",
                cursor: "pointer",
                "&:hover": { color: "#334576" },
              }}
            />
          </Link>
          {/* <Button sx={{bgcolor:"#334576", "&:hover":{bgcolor:"#334576"}, p:1}} onClick={()=>{setEditService("new")}}><Typography sx={{textTransform:"capitalize", color:"white"}}>Create new category</Typography></Button> */}
        </Box>
        {/* {services?.map((service) => ( */}
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
                  width: "30%",
                  height: "200px",
                  borderRadius: "16px",
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
                <input
                  {...register("image", { required: true })}
                  type="file"
                  hidden
                />
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mb: 4,
                  width: "45%",
                  mr: 4,
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mb: 4,
                  width: "45%",
                }}
              >
                <Typography sx={{ fontSize: "14px", mb: 1 }}>
                  Category Description
                </Typography>
                <TextField
                  size="small"
                  placeholder="Description"
                  variant="standard"
                  sx={{
                    bgcolor: "#eeeeee",
                    p: 1,
                    borderRadius: "5px",
                    width: "100%",
                  }}
                  InputProps={{ disableUnderline: true }}
                  {...register("description", { required: true })}
                ></TextField>
              </Box>
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
                "&:hover": { bgcolor: "#245cbc", cursor: "pointer" },
              }}
              disableUnderline
              value={"Update Category"}
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
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          borderRadius: "10px",
          width: "95%",
          display: editService == "new" ? "flex" : "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
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
            Add Category
          </Typography>
          <Link href="/admin" underline="none">
            <ArrowBackIcon
              sx={{
                mt: 2,
                fontSize: "30px",
                color: "#245cbc",
                cursor: "pointer",
                "&:hover": { color: "#334576" },
              }}
            />
          </Link>
          {/* <Button sx={{bgcolor:"#334576", "&:hover":{bgcolor:"#334576"}, p:1}} onClick={()=>{setEditService("new")}}><Typography sx={{textTransform:"capitalize", color:"white"}}>Create new category</Typography></Button> */}
        </Box>
        {/* {services?.map((service) => ( */}
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
                  width: "30%",
                  height: "200px",
                  borderRadius: "16px",
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
                <input
                  {...register("image", { required: true })}
                  type="file"
                  hidden
                />
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mb: 4,
                  width: "45%",
                  mr: 4,
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mb: 4,
                  width: "45%",
                }}
              >
                <Typography sx={{ fontSize: "14px", mb: 1 }}>
                  Category Description
                </Typography>
                <TextField
                  size="small"
                  placeholder="Description"
                  variant="standard"
                  sx={{
                    bgcolor: "#eeeeee",
                    p: 1,
                    borderRadius: "5px",
                    width: "100%",
                  }}
                  InputProps={{ disableUnderline: true }}
                  {...register("desc", { required: false })}
                ></TextField>
              </Box>
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
                "&:hover": { bgcolor: "#245cbc", cursor: "pointer" },
              }}
              disableUnderline
              value={"Add Category"}
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
