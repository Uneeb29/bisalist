import {
  Stack,
  Box,
  Divider,
  Typography,
  Link,
  Badge,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import QueueOutlinedIcon from "@mui/icons-material/QueueOutlined";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "#334576",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
      height="5rem"
      width="100%"
    >
      <Box sx={{ ml: 4 }} height={"40%"}>
        <img src="logo.png" style={{ height: "100%" }}></img>
      </Box>
      <Box
        sx={{
          borderRadius: "20px",
          bgcolor: "#526394",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
          cursor: "pointer",
        }}
        width={"13%"}
      >
        <SearchIcon sx={{ color: "#4db4f9", mr: 1 }} />
        <Divider
          sx={{ bgcolor: "#4db4f9", height: "10px", width: "1px", mr: 1 }}
        ></Divider>
        <Typography
          sx={{ color: "white", fontSize: "14px", fontWeight: "bold" }}
        >
          Search
        </Typography>
      </Box>
      <Stack direction={"row"} spacing={3}>
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
            Home
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
            Listings
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
            Contact us
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
            About us
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
            Login
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
            Track Jobs
          </Typography>
        </Link>
      </Stack>
      <Divider
        sx={{ bgcolor: "#4db4f9", height: "20px", width: "1px", mr: 1 }}
      ></Divider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <PermIdentityIcon sx={{ color: "#4db4f9" }} />
        <Typography
          sx={{ color: "white", fontSize: "13px", fontWeight: "bold" }}
        >
          Sign in
        </Typography>
      </Box>
      <Badge badgeContent={1} color="primary">
        <FavoriteBorderIcon sx={{ color: "white" }} />
      </Badge>
      <Box
        sx={{
          p: 0.75,
          bgcolor: "#526394",
          borderRadius: "8px",
          width: "13%",
          mr: 1,
        }}
      >
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#4db4f9",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              textTransform: "capitalize",
              color: "white",
              mr: 1,
            }}
          >
            Add Listing
          </Typography>
          <Box>
            <QueueOutlinedIcon sx={{ color: "white" }} />
          </Box>
        </Button>
      </Box>
    </Stack>
  );
}
