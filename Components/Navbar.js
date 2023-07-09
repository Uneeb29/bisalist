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
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Avatar from '@mui/material/Avatar';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";



export default function Navbar() {
  const { data: session, status } = useSession();

  if (session){
    console.log("session1", session);
  }
  const [anchorEl, setAnchorEl] =useState(null);
  const menuOpen  =Boolean(anchorEl);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setAnchorEl(null);
    signOut();
  };

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
      <Link sx={{ ml: 4, cursor: "pointer" }} height={"100%"} href="/">
        <img src="logo1.png" style={{ height: "50%", marginTop: "10%" }}></img>
      </Link>
      
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
     
        <Link
          underline="none"
          sx={{
            cursor: "pointer",
          }}
          href="/contactus"
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
        <Link underline="none" sx={{ cursor: "pointer" }} href="/aboutus">
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
     
      </Stack>
        
      <Box 
      sx={{width: "20%",
      display:"flex",
      justifyContent:'space-between',
      alignItems:"center"}}>

      <Divider
        sx={{ bgcolor: "#4db4f9", height: "20px", width: "1px", mr: 1 }}
      ></Divider>

      
    {session &&  
  
    <Box>
     <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ mr: 8 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 38, height: 38 }}>{session.user.name.charAt(0).toUpperCase()}</Avatar>
          </IconButton>
        </Tooltip>
    <Menu
    anchorEl={anchorEl}
    id="account-menu"
    open={menuOpen}
    onClose={handleCloseMenu}
    onClick={handleCloseMenu}
    PaperProps={{
      elevation: 0,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  >
    
    <MenuItem >
      <Avatar /> My account
    </MenuItem>
    <Divider />
   
    
    <MenuItem onClick={handleSignOut}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Sign Out
    </MenuItem>
  </Menu>
  </Box>
   }

    {!session &&
    // <div>
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
}
{!session &&
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
    // </div>
    
    }
    
    

        

      </Box>
        
        
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
