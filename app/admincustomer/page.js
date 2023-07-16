"use client";
import {
  Container,
  FormControl,
  Stack,
  Typography,
  Box,
  TextField,
  Checkbox,
  Button,
  Paper,
  Modal
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { redirect } from "next/dist/server/api-utils";
import CircularProgress from '@mui/joy/CircularProgress';

export default function EditCustomer() {

  const [registeredSuccessfully, setRegisteredSuccessfully] = useState([false]);
  const [registeredFailed, setRegisteredFailed] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  // default values added here only for testing purposes and will be removed later
  const { data: session, status } = useSession();

  if (session) {
    console.log("session1", session);
  }

  const {
    register,
    setValue,
    setError,
    handleSubmit,

    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {},
  });

  async function fetchData() {
    if (session) {
      const result = await fetch(`/api/customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "fetchSingle",
          email: session.user.email,
        }),
      });

      const response = await result.json();
      

      console.log("Response: ", response);

      // set the customer data in the state
      return response;
    }
  }

  useEffect(() => {
    if (session) {
      fetchData().then((data) => {
        setValue("name", data.name);
        setValue("email", data.email);
        setValue("phone", data.phone);
      });
    }
  }, [session]);

  console.log("Errors: ", errors);

  // a function to validate the ghana phone number entered by the user
  function validatePhone(phone) {
    if (phone) {
      var phone_re = /^03\d{9}$/;
      return phone_re.test(phone);
    } else {
      return true;
    }
  }

  async function sendData(data) {
    // console log the data if all the validations are passed
    if (validatePhone(data.phone) && data.password === data.c_password) {
      let dataToSend = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        // if the user has entered a password, then send it to the database
        // otherwise, don't send it
        ...(data.password && { password: data.password }),
        action: "update",
      };

      const result = await fetch("/api/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const response = await result.json();
      if (result.status) {
        if (result.status === 200)
        {
          handleClose2();
          setRegisteredSuccessfully(true);
          handleOpen();
        }
        else{
          handleClose2();
          setRegisteredFailed(true);
          handleOpen1();
        }
      }
      console.log("Response: ", response);
    } else {
      // check if phone number format is valid
      if (!validatePhone(data.phone)) {
        console.log("Invalid Phone Number");

        setError("phone", {
          type: "string",
          message: "Invalid Phone Number",
        });
      }

      // check if passwords match
      if (data.password !== data.c_password) {
        console.log("Passwords don't match");

        setError("c_password", {
          type: "string",
          message: "Passwords don't match",
        });
      }
    }
  }
  if (session) {
    if (session.user.role !== "customer") {
      window.location.href = "/login";
    } else {
      return (
        <Container
          sx={{
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{display: registeredSuccessfully ? "block": "none"}}
      >
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "30%",
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
          {/* <Link
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
          </Link> */}
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center" ,flexDirection:"column", width:"100%", textAlign:"center"}}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>Credentials Updated.</Typography>
              <Button onClick={handleClose} sx={{bgcolor:"#245cbc", color:"white", mt:1, width:"40%", "&:hover":{bgcolor:"#334576"}}}><Typography>Ok</Typography></Button>
            </Box>
          
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "48%",
            //transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "transparent",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
            width:"fit-content",
            height:"fit-content",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center" ,flexDirection:"column", width:"100%", textAlign:"center"}}>
            <CircularProgress variant="solid" />
            </Box>
          
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{display: registeredFailed ? "block": "none"}}
      >
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "30%",
            //transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
            display: "flex",
          }}
        >
          {/* <Link
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
          </Link> */}
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center" ,flexDirection:"column", width:"100%", textAlign:"center"}}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>An error occurred. Please try again.</Typography>
            <Button onClick={handleClose1} sx={{bgcolor:"#245cbc", color:"white", mt:1, width:"40%", "&:hover":{bgcolor:"#334576"}}}><Typography>Ok</Typography></Button>
            </Box>
          
        </Box>
      </Modal>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "white",
              width: "45%",
              mt: 10,
              borderRadius: "8px",
              justifyContent: "center",

              p: 3,
            }}
            elevation={3}
          >
            <Typography
              sx={{
                mt: 4,
                fontWeight: "bold",
                fontSize: "20px",
                mb: 4,
                alignSelf: "center",
              }}
            >
              Edit Profile
            </Typography>
            <form onSubmit={handleSubmit(sendData)}>
              <FormControl sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "14px", mr: 2 }}
                    >
                      Name
                    </Typography>
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors.name?.message}
                    </p>
                  </Box>

                  <TextField
                    {...register("name", { required: "Name is required." })}
                    size="small"
                    sx={{
                      bgcolor: "#eeeeee",
                      p: 1,
                      borderRadius: "5px",
                    }}
                    variant="standard"
                    placeholder="Name"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "14px", mr: 2 }}
                    >
                      Email address
                    </Typography>
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors.email?.message}
                    </p>
                  </Box>

                  <TextField
                    {...register("email", {
                      required: "Email Address is required.",
                    })}
                    placeholder="Email address"
                    size="small"
                    sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    disabled
                  ></TextField>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "14px", mr: 2 }}
                    >
                      Phone Number
                    </Typography>
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors.phone?.message}
                    </p>
                  </Box>

                  <TextField
                    {...register("phone", {
                      required: "Phone Number is required.",
                    })}
                    placeholder="(123) 456-7890"
                    size="small"
                    sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "14px", mr: 2 }}
                    >
                      New Password (Minimum 8 characters)
                    </Typography>
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors.password?.message}
                    </p>
                  </Box>

                  <TextField
                    {...register("password", {
                      minLength: {
                        value: 8,
                        message: "Minimum 8 characters required.",
                      },
                    })}
                    placeholder="New Password"
                    size="small"
                    type="password"
                    sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "14px", mr: 2 }}
                    >
                      Confirm New Password
                    </Typography>
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors.c_password?.message}
                    </p>
                  </Box>

                  <TextField
                    {...register("c_password", {
                      minLength: {
                        value: 8,
                        message: "Minimum 8 characters required.",
                      },
                    })}
                    placeholder="Confirm New Password"
                    size="small"
                    type="password"
                    sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
                    variant="standard"
                    // onChange={handleConfirmationChange}
                    InputProps={{ disableUnderline: true }}
                  ></TextField>
                </Box>

                <Box sx={{ width: "100%", mb: 4 }}>
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      bgcolor: !isValid || !isDirty ? "#cccccc" : "#245cbc",
                      cursor: !isValid || !isDirty ? "not-allowed" : "pointer",
                      color: "white",
                      width: "100%",
                      p: 1.5,
                      "&:hover": {
                        bgcolor: !isValid || !isDirty ? "#cccccc" : "#245cbc",
                      },
                    }}
                    onClick={handleOpen2}
                    type="submit"
                    disabled={!isValid || !isDirty}
                  >
                    <Typography
                      sx={{ color: "white", textTransform: "capitalize" }}
                    >
                      Save Changes
                    </Typography>
                  </Button>
                </Box>
              </FormControl>
            </form>
          </Paper>
        </Container>
      );
    }
  }
}
