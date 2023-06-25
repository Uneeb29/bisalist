import {
  Stack,
  Box,
  Typography,
  Link,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";

export default function Cover() {
  return (
    <Stack
      sx={{
        backgroundImage: 'url("landingImage.jpg")',
        backgroundSize: "cover",
        height: "95vh",
        width: "100vw",
        display: "flex",
        zIndex: 0,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100vw",
          height: "95vh",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        },
      }}
    >
      <Typography
        sx={{ fontSize: "55px", fontWeight: "bold", color: "white", mb: 1 }}
      >
        Fixing your problems one click at a time
      </Typography>
      <Typography sx={{ color: "white", fontSize: "14px", mb: 8 }}>
        Find the right pro for every project with ease.
      </Typography>
      {/* <Stack
        direction={"row"}
        sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
        width={"40%"}
      >
        <Link underline="none">
          <Typography
            sx={{
              color: "white",
              "&:hover": {
                color: "#4db4f9",
              },
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Electrical
          </Typography>
        </Link>
        <Link underline="none">
          <Typography
            sx={{
              color: "white",
              "&:hover": {
                color: "#4db4f9",
              },
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Plumber
          </Typography>
        </Link>
        <Link underline="none">
          <Typography
            sx={{
              color: "white",
              "&:hover": {
                color: "#4db4f9",
              },
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Cleaning Services
          </Typography>
        </Link>
        <Link underline="none">
          <Typography
            sx={{
              color: "white",
              "&:hover": {
                color: "#4db4f9",
              },
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Gypsum Works
          </Typography>
        </Link>
      </Stack> */}
      <Box
        sx={{
          p: 0.75,
          bgcolor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "8px",
          width: "65%",
          mb: 5,
        }}
        id="search"
      >
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
          placeholder="What are you looking for?"
          sx={{
            bgcolor: "white",
            borderRadius: "8px",
            width: "100%",
            height: "full",
          }}
        ></TextField>
      </Box>
      {/* <Stack direction={"row"} spacing={5}>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "14px",
              "&:hover": {
                color: "#4db4f9",
              },
            }}
          >
            Saloons
          </Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "14px",
              "&:hover": {
                color: "#4db4f9",
              },
              fontWeight: "bold",
            }}
          >
            Property Management
          </Typography>
        </Link>
        <Link
          underline="none"
          sx={{
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "14px",
              "&:hover": {
                color: "#4db4f9",
              },
              fontWeight: "bold",
            }}
          >
            Plumber
          </Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "14px",
              "&:hover": {
                color: "#4db4f9",
              },
              fontWeight: "bold",
            }}
          >
            Masonry
          </Typography>
        </Link>
        <Link underline="none" sx={{ cursor: "pointer" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "14px",
              "&:hover": {
                color: "#4db4f9",
              },
              fontWeight: "bold",
            }}
          >
            Home Services/Installation
          </Typography>
        </Link>
      </Stack> */}
    </Stack>
  );
}
