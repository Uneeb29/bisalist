"use client";
import {
  Container,
  Paper,
  Typography,
  Box,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Input,
  Button,
} from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import CreateIcon from "@mui/icons-material/Create";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useForm } from "react-hook-form";
import { basePath } from "../../next.config";

// Reminders:
// create a check on the starting cost (It should be a number greater than 0)

export default function BecomeVendor() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm({
    // for testing purpose only
    defaultValues: {
      companyName: "Gorillaz Inc.",
      firstname: "Test",
      lastname: "Subject",
      streetName: "Gorillaz Street, 123",
      city: "New York",
      postAddress: "Test Post Address",
      telephoneNumber: "03123456780",
      service: "Creating Music",

      description: "We create music for you. We are the best in the world.",
      startingCost: 300,
      email: "gor123@test.com",
      password: "12345678",
      confirmPassword: "12345678",
      documentType: "Ghana Card",
      // file: "",
    },
  });

  console.log("Errors: ", errors);

  /* functions reused */
  // a function to vaildate the email address entered by the user
  function validateEmail(email) {
    var email_re = /\S+@\S+\.\S+/;
    return email_re.test(email);
  }

  // a function to validate the ghana phone number entered by the user
  function validatePhone(phone) {
    var phone_re = /^03\d{9}$/;
    return phone_re.test(phone);
  }

  /* New validation functions */

  function validateFileType(file) {
    if (file[0].type !== "application/pdf") {
      return false;
    }
    return true;
  }

  function validateFileSize(file) {
    if (file[0].size > 5000000) {
      return false;
    }
    return true;
  }

  async function sendData(data) {
    // log data in console if all checks are passed
    if (
      validateEmail(data.email) &&
      validatePhone(data.telephoneNumber) &&
      // removing file validation for now
      // validateFileType(data.file) &&
      // validateFileSize(data.file) &&
      data.startingCost > 0 &&
      data.password === data.confirmPassword
    ) {
      console.log("Data: ", data);

      if (data.avi.length !== 0) {
        const fileReader = new FileReader();
        // convert image to base64 string and store it in a variable
        // this variable will be sent to the server

        fileReader.onload = async function () {
          const base64img = fileReader.result;

          // for the cover image now
          if (data.cover.length !== 0) {
            const fileReader2 = new FileReader();

            fileReader2.onload = async function () {
              const base64img2 = fileReader2.result;

              // send data to the server
              const dataToSend = {
                companyName: data.companyName,
                firstname: data.firstname,
                lastname: data.lastname,
                streetName: data.streetName,
                city: data.city,
                postAddress: data.postAddress,
                telephoneNumber: data.telephoneNumber,
                service: data.service,
                description: data.description,
                startingCost: data.startingCost,
                email: data.email,
                password: data.password,
                documentType: data.documentType,
                avi: base64img,
                cover: base64img2,
              };

              const result = await fetch("/api/vendor", {
                method: "POST",
                body: JSON.stringify(dataToSend),
              });

              console.log("Response Status: ", result.status);

              const response = await result.json();

              console.log("Data Response: ", response);
            };

            fileReader2.readAsDataURL(data.cover[0]);
          } else {
            // send data to the server
            const dataToSend = {
              companyName: data.companyName,
              firstname: data.firstname,
              lastname: data.lastname,
              streetName: data.streetName,
              city: data.city,
              postAddress: data.postAddress,
              telephoneNumber: data.telephoneNumber,
              service: data.service,
              description: data.description,
              startingCost: data.startingCost,
              email: data.email,
              password: data.password,
              documentType: data.documentType,

              avi: base64img,
            };

            const result = await fetch("/api/vendor", {
              method: "POST",
              body: JSON.stringify(dataToSend),
            });

            console.log("Response Status: ", result.status);

            const response = await result.json();

            console.log("Data Response: ", response);
          }
        };

        fileReader.readAsDataURL(data.avi[0]);
      } else {
        // if avi doesnt exist but cover does
        if (data.cover.length !== 0) {
          const fileReader2 = new FileReader();

          fileReader2.onload = async function () {
            const base64img2 = fileReader2.result;

            // send data to the server

            const dataToSend = {
              companyName: data.companyName,
              firstname: data.firstname,
              lastname: data.lastname,
              streetName: data.streetName,
              city: data.city,
              postAddress: data.postAddress,
              telephoneNumber: data.telephoneNumber,
              service: data.service,
              description: data.description,
              startingCost: data.startingCost,
              email: data.email,
              password: data.password,
              documentType: data.documentType,
              cover: base64img2,
            };

            const result = await fetch("/api/vendor", {
              method: "POST",
              body: JSON.stringify(dataToSend),
            });

            console.log("Response Status: ", result.status);

            const response = await result.json();

            console.log("Data Response: ", response);
          };

          fileReader2.readAsDataURL(data.cover[0]);
        } else {
          const dataToSend = {
            companyName: data.companyName,
            firstname: data.firstname,
            lastname: data.lastname,
            streetName: data.streetName,
            city: data.city,
            postAddress: data.postAddress,
            telephoneNumber: data.telephoneNumber,
            service: data.service,
            description: data.description,
            startingCost: data.startingCost,
            email: data.email,
            password: data.password,
            documentType: data.documentType,
          };

          const result = await fetch("/api/vendor", {
            method: "POST",
            body: JSON.stringify(dataToSend),
          });

          console.log("Response Status: ", result.status);

          const response = await result.json();

          console.log("Data Response: ", response);
        }
      }
    } else {
      // set error if any of the checks fail
      if (!validateEmail(data.email)) {
        setError("email", {
          type: "manual",
          message: "Invalid email address",
        });
      }
      if (!validatePhone(data.telephoneNumber)) {
        setError("telephoneNumber", {
          type: "manual",
          message: "Invalid phone number",
        });
      }
      if (!validateFileSize(data.file)) {
        setError("file", {
          type: "manual",
          message: "File size must be less than 5MB",
        });
      }
      if (!validateFileType(data.file)) {
        setError("file", {
          type: "manual",
          message: "File must be a PDF",
        });
      }
      if (data.startingCost <= 0) {
        setError("startingCost", {
          type: "manual",
          message: "Starting cost must be greater than 0",
        });
      }
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
      }
    }
  }

  return (
    <Container sx={{ mt: 14 }}>
      <Paper
        elevation={3}
        sx={{ display: "flex", flexDirection: "column", pb: 2 }}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold", mt: 6, ml: 3, mb: 4 }}
        >
          Register
        </Typography>

        <form onSubmit={handleSubmit(sendData)}>
          <Box
            sx={{
              width: "70%",
              height: "250px",
              position: "absolute",
              zIndex: 0,
              borderRadius: "16px",
            }}
          >
            <Button component="label">
              <AddAPhotoIcon
                sx={{ fontSize: "50px", cursor: "pointer", color: "#eeeeee" }}
              ></AddAPhotoIcon>
              <input {...register("cover")} type="file" hidden />
            </Button>
          </Box>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              height: "200px",
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
          </Paper>
          <FormControl sx={{ width: "100%", mt: 4, ml: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                    mr: 4,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Company Name*
                    {errors.companyName ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.companyName.message}
                      </Typography>
                    ) : null}
                  </Typography>

                  <TextField
                    {...register("companyName", {
                      required: "Company Name is required.",
                    })}
                    placeholder="Company Name"
                    size="small"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Firstname
                    {errors.firstname ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.firstname.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <TextField
                    {...register("firstname", {
                      required: "Firstname is required.",
                    })}
                    placeholder="Firstname"
                    size="small"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                    mr: 4,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Lastname
                    {errors.lastname ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.lastname.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <TextField
                    {...register("lastname", {
                      required: "Lastname is required.",
                    })}
                    placeholder="Lastname"
                    size="small"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Building No./Name & Street Name
                    {errors.streetName ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.streetName.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <TextField
                    {...register("streetName", {
                      required: "This field is required.",
                    })}
                    placeholder="Apartment/Studio or Floor"
                    size="small"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                    mr: 4,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Locality/Town & City
                    {errors.city ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.city.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <TextField
                    {...register("city", { required: "City is required." })}
                    placeholder="Enter a Location"
                    size="small"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Ghana Post Address
                    {errors.postAddress ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.postAddress.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <TextField
                    {...register("postAddress", {
                      required: "Post Address is required.",
                    })}
                    placeholder="Apartment/Studio or Floor"
                    size="small"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                    mr: 4,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Telephone Number (Business Number/Person's Number)
                    {errors.telephoneNumber ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.telephoneNumber.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <TextField
                    {...register("telephoneNumber", {
                      required: "Telephone Number is required.",
                    })}
                    placeholder="(123) 456-7890"
                    size="small"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Service you provide
                    {errors.service ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.service.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <Select
                    {...register("service", {
                      required: "Service type is required.",
                    })}
                    label="Select a service"
                    sx={{ width: "45%", bgcolor: "#eeeeee" }}
                    size="small"
                  >
                    <MenuItem value="Cleaning Service">
                      Cleaning Services
                    </MenuItem>
                    <MenuItem value="Carpentry">Carpentry</MenuItem>
                    <MenuItem value="Masonry">Masonry</MenuItem>
                    <MenuItem value="Plumber">Plumber</MenuItem>
                    <MenuItem value="Electrician">Electrician</MenuItem>
                    <MenuItem value="General Contractor">
                      General Contractor
                    </MenuItem>
                    <MenuItem value="Property Management">
                      Property Management
                    </MenuItem>
                    <MenuItem value="Appliance Services/Repair">
                      Appliance Services/Repair
                    </MenuItem>
                    <MenuItem value="Home Services/Installation">
                      Home Services/Installation
                    </MenuItem>
                    <MenuItem value="Salons">Salons</MenuItem>
                    <MenuItem value="Event Planning">Event Planning</MenuItem>
                  </Select>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "93%",
                  mr: 4,
                  mt: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    mb: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  Tell us a bit about yourself
                  {errors.description ? (
                    <Typography sx={{ fontSize: "12px", color: "red", ml: 2 }}>
                      {errors.description.message}
                    </Typography>
                  ) : null}
                </Typography>
                <TextField
                  {...register("description", {
                    required: "Description is required.",
                  })}
                  placeholder="Short description about yourself"
                  multiline
                  rows={4}
                  size="small"
                  sx={{
                    bgcolor: "#eeeeee",
                    p: 1,
                    borderRadius: "5px",
                    width: "100%",
                  }}
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                ></TextField>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "93%",
                  mr: 4,
                  mt: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    mb: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  Starting cost
                  {errors.startingCost ? (
                    <Typography sx={{ fontSize: "12px", color: "red", ml: 2 }}>
                      {errors.startingCost.message}
                    </Typography>
                  ) : null}
                </Typography>
                <TextField
                  {...register("startingCost", {
                    required: "Starting Cost is required.",
                    // It should be a number
                    valueAsNumber: true,
                  })}
                  size="small"
                  sx={{
                    bgcolor: "#eeeeee",
                    p: 1,
                    borderRadius: "5px",
                    width: "100%",
                  }}
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                ></TextField>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                    mr: 4,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Email Address
                    {errors.email ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.email.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <TextField
                    {...register("email", {
                      required: "Email is required.",
                    })}
                    placeholder="john@doe.com"
                    size="small"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Password(Minimum 8 characters)
                    {errors.password ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.password.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <TextField
                    {...register("password", {
                      required: "Password is required.",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    placeholder="Password"
                    size="small"
                    type="password"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                    mr: 4,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Confirm Password
                    {errors.confirmPassword ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.confirmPassword.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <TextField
                    {...register("confirmPassword", {
                      required: "Confirm Password is required.",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    placeholder="Password"
                    size="small"
                    type="password"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
                {/* <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Category (Electrician, Plumber, Masonry, Musician, etc.)
                    {errors.category ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.category.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <TextField
                    {...register("category", {
                      required: "Category is required.",
                    })}
                    placeholder="Category"
                    size="small"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box> */}
              </Box>
              <Typography sx={{ fontSize: "20px", mt: 3, fontWeight: "bold" }}>
                Business Information
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  mt: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    Type of document*
                  </Typography>
                  <Select
                    {...register("documentType", {
                      required: "Document type is required.",
                    })}
                    label="Select document type"
                    sx={{ width: "45%", bgcolor: "#eeeeee" }}
                    size="small"
                  >
                    <MenuItem value="1">Ghana Card</MenuItem>
                    <MenuItem value="2">
                      Business Registration Certificate
                    </MenuItem>
                  </Select>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: 1,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    Upload document*
                    {errors.file ? (
                      <Typography
                        sx={{ fontSize: "12px", color: "red", ml: 2 }}
                      >
                        {errors.file.message}
                      </Typography>
                    ) : null}
                  </Typography>
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
                      width: "30%",
                      bgcolor: "#eeeeee",
                      "&:hover": { bgcolor: "grey" },
                    }}
                    display="flex"
                    flexDirection="row"
                  >
                    <CloudUploadIcon sx={{ mr: 1, color: "black" }} />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Upload File
                    </Typography>
                    <input
                      accept="application/pdf" // only takes pdf files
                      {...register("file", {
                        // required: "File is required.",
                      })}
                      type="file"
                      hidden
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
            <Button
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                bgcolor: !isDirty || !isValid ? "#cccccc" : "#334576",
                cursor: !isDirty || !isValid ? "not-allowed" : "pointer",
                mt: 3,
                width: "15%",
                p: 1,
                alignSelf: "flex-end",
                mr: 10,
                "&:hover": {
                  bgcolor: !isDirty || !isValid ? "#cccccc" : "#334576",
                },
              }}
              type="submit"
              // button is disabled if form has not been changed
              // or if there are errors
              disabled={!isDirty || !isValid}
            >
              <Typography
                sx={{ color: "white", fontSize: "14px", fontWeight: "bold" }}
              >
                Submit Now
              </Typography>
              <SendIcon sx={{ ml: 1, color: "white", fontSize: "16px" }} />
            </Button>
          </FormControl>
        </form>
      </Paper>
    </Container>
  );
}
