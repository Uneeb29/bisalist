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
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function EditCustomer() {
  // default values added here only for testing purposes and will be removed later
  const { data: session, status } = useSession();
  // store the customer data in the state
  const [customer, setCustomer] = useState({});

  if (session) {
    console.log("session1", session);
  }

  const {
    register,

    setError,
    handleSubmit,

    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      // name: "Ilean Dover",
      // email: "test123@gmail.com",
      // phone: "1234567890",
      // password: "kanyeLeast",
      // c_password: "kanyeLeast",
      // offers: true,
      // agreement: true
      // boxes arent getting checked so removing these
    },
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
    fetchData().then((data) => {
      setCustomer(data);
    });
  }, [session]);

  useEffect(() => {
    console.log("customer", customer);
  }, [customer]);

  console.log(customer);

  console.log("Errors: ", errors);

  // a function to validate the ghana phone number entered by the user
  function validatePhone(phone) {
    var phone_re = /^03\d{9}$/;
    return phone_re.test(phone);
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
  if (customer) {
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
                  value={customer.name ? customer.name : ""}
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
                  value={customer.email ? customer.email : ""}
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
                  value={customer.phone ? customer.phone : ""}
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
  } else {
    return null;
  }
}
