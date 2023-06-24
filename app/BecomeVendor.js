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

export default function BecomeVendor() {
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
                sx={{ display: "flex", flexDirection: "column", width: "45%" }}
              >
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                >
                  Firstname
                </Typography>
                <TextField
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
                sx={{ display: "flex", flexDirection: "column", width: "45%" }}
              >
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                >
                  Building No./Name & Street Name
                </Typography>
                <TextField
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
                sx={{ display: "flex", flexDirection: "column", width: "45%" }}
              >
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                >
                  Ghana Post Address
                </Typography>
                <TextField
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
                sx={{ display: "flex", flexDirection: "column", width: "45%" }}
              >
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                >
                  Service you provide
                </Typography>
                <TextField
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
              <Typography sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}>
                Tell us a bit about yourself
              </Typography>
              <TextField
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
              <Typography sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}>
                Starting cost
              </Typography>
              <TextField
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
                sx={{ display: "flex", flexDirection: "column", width: "45%" }}
              >
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}
                >
                  Password(Minimum 8 characters)
                </Typography>
                <TextField
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
            <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
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
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
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
                  <input type="file" hidden />
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
          >
            <Typography
              sx={{ color: "white", fontSize: "14px", fontWeight: "bold" }}
            >
              Submit Now
            </Typography>
            <SendIcon sx={{ ml: 1, color: "white", fontSize: "16px" }} />
          </Button>
        </FormControl>
      </Paper>
    </Container>
  );
}
