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

import { useForm } from "react-hook-form";

export default function BecomeCustomer() {
  // default values added here only for testing purposes and will be removed later
  const {
    register,
    getValues,
    setError,
    handleSubmit,
    watch,
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

  console.log("Errors: ", errors);

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

  async function sendData(data) {
    // console log the data if all the validations are passed
    if (
      validateEmail(data.email) &&
      validatePhone(data.phone) &&
      data.password === data.c_password
    ) {
      let dataToSend = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        offers: data.offers,
        agreement: data.agreement,
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
      // check if email format is valid
      if (!validateEmail(data.email)) {
        console.log("Invalid Email Address");

        setError("email", {
          type: "string",
          message: "Invalid Email Address",
        });
      }

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
          alignItems: "center",
          p: 3,
        }}
        elevation={3}
      >
        <Typography sx={{ mt: 4, fontWeight: "bold", fontSize: "20px", mb: 4 }}>
          Register
        </Typography>
        <form onSubmit={handleSubmit(sendData)}>
          <FormControl>
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
                  Name
                </Typography>
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.name?.message}
                </p>
              </Box>

              <TextField
                {...register("name", { required: "Name is required." })}
                size="small"
                sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
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
                  Password (Minimum 8 characters)
                </Typography>
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.password?.message}
                </p>
              </Box>

              <TextField
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters required.",
                  },
                })}
                placeholder="Password"
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
                  Confirm Password
                </Typography>
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.c_password?.message}
                </p>
              </Box>

              <TextField
                {...register("c_password", {
                  required: "This field is required.",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters required.",
                  },
                })}
                placeholder="Confirm Password"
                size="small"
                type="password"
                sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
                variant="standard"
                // onChange={handleConfirmationChange}
                InputProps={{ disableUnderline: true }}
              ></TextField>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Checkbox {...register("offers")}></Checkbox>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                Special Email Offers and Discount
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Checkbox
                {...register("agreement", {
                  required: "Accepting the agreement is mandatory.",
                })}
              ></Checkbox>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                {errors.agreement?.message}I agree to the service agreement and
                terms of the Membership Agreement.
              </Typography>
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
                  Register
                </Typography>
              </Button>
            </Box>
          </FormControl>
        </form>
      </Paper>
    </Container>
  );
}
