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
import { useForm } from "react-hook-form";

export default function BecomeVendor() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      companyName: "Gorillaz Inc.",
      firstname: "Test",
      lastname: "Subject",
      streetName: "Gorillaz Street, 123",
      city: "New York",
      postAddress: "  12345 ",
      telephoneNumber: "03123456780",
      service: "Creating Music",
      description: "We create music for you. We are the best in the world.",
      startingCost: "300",
      email: " gor123@test.com ",
      password: "KanyeLeast",
      documentType: "",
      file: "",
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

  // a function to validate the file uploaded by the user (the size of the pdf)
  function validateFile(file) {
    // check if its size is less than 5MB
    if (file.size > 5000000) {
      return false;
    }
    return true;
  }

  function sendData(data) {
    // log data in console if all checks are passed
    if (
      validateEmail(data.email) &&
      validatePhone(data.phone) &&
      validateFile(data.file)
    ) {
      console.log(data);
    }
  }

  return (
    <Container sx={{ mt: 14 }}>
      <Paper
        elevation={3}
        sx={{ display: "flex", flexDirection: "column", mb: 3, pb: 2 }}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold", mt: 6, ml: 3, mb: 4 }}
        >
          Register
        </Typography>
        <Box
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
          <Paper
            sx={{
              borderRadius: "50%",
              height: "fit-content",
              p: 0.5,
              cursor: "pointer",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
            elevation={3}
          >
            <CreateIcon sx={{ fontSize: "20px" }}></CreateIcon>
          </Paper>
        </Box>
        <form onSubmit={handleSubmit}>
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
                    sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                  >
                    Company Name*
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
                    sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                  >
                    Firstname
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
                    sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                  >
                    Lastname
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
                    sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                  >
                    Building No./Name & Street Name
                  </Typography>
                  <TextField
                    {...register("streetName", {
                      required: "Street Name is required.",
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
                    sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                  >
                    Locality/Town & City
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
                    sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                  >
                    Ghana Post Address
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
                    sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                  >
                    Telephone Number (Business Number/Person's Number)
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
                    sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                  >
                    Service you provide
                  </Typography>
                  <TextField
                    {...register("service", {
                      required: "This field is required.",
                    })}
                    placeholder="Service you provide"
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
                  sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                >
                  Tell us a bit about yourself
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
                  sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                >
                  Starting cost
                </Typography>
                <TextField
                  {...register("startingCost", {
                    required: "Starting Cost is required.",
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
                    sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                  >
                    Email Address
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
                    sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                  >
                    Password(Minimum 8 characters)
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
                      required: "Document Type is required.",
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
                    }}
                  >
                    Upload document*
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
                        required: "File is required.",
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
                bgcolor: "#334576",
                mt: 3,
                width: "15%",
                p: 1,
                alignSelf: "flex-end",
                mr: 10,
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
