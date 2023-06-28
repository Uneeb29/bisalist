"use client";
import {
  Stack,
  Box,
  Divider,
  Typography,
  Badge,
  Button,
  Link,
  Modal,
} from "@mui/material";
import { React, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import QueueOutlinedIcon from "@mui/icons-material/QueueOutlined";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      <Link sx={{ ml: 4, cursor:"pointer" }} height={"100%"} href="/">
        <img src="logo1.png" style={{ height: "50%", marginTop:"10%" }}></img>
      </Link>
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
      <Stack direction={"row"} spacing={10}>
        <Link underline="none" sx={{ cursor: "pointer" }} href="/">
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
        {/* <Link underline="none" sx={{ cursor: "pointer" }}>
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
        </Link> */}
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
        {/* <Link underline="none" sx={{ cursor: "pointer" }}>
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
        </Link> */}
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
      <Link underline="none" href="/login">
      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mr: 2,
        }}
      >
        <PermIdentityIcon sx={{ color: "#4db4f9" }} />
        <Typography
          sx={{
            color: "white",
            fontSize: "13px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Sign in
        </Typography>
      </Button>
      </Link>
      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mr: 2,
        }}
        onClick={handleOpen}
      >
        <PermIdentityIcon sx={{ color: "#4db4f9" }} />
        <Typography
          sx={{
            color: "white",
            fontSize: "13px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Sign up
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "15%",
            right: "0%",
            //transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="becomecustomer"
            sx={{
              bgcolor: "#4db4f9",
              color: "white",
              borderRadius: "8px",
              p: 1,
              width: "40%",
              display: "flex",
              justifyContent: "center",
            }}
            underline="none"
          >
            <Typography>Become a Customer</Typography>
          </Link>
          <Link
            href="\becomevendor"
            sx={{
              bgcolor: "#4db4f9",
              color: "white",
              borderRadius: "8px",
              p: 1,
              width: "40%",
              display: "flex",
              justifyContent: "center",
            }}
            underline="none"
          >
            <Typography>Become a Vendor</Typography>
          </Link>
        </Box>
      </Modal>

      {/* <Badge badgeContent={1} color="primary">
        <FavoriteBorderIcon sx={{ color: "white" }} />
      </Badge> */}
      {/* <Box
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
      </Box> */}
    </Stack>
  );
}
