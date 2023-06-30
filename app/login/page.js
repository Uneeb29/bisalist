"use client";

import {
  Container,
  Paper,
  Typography,
  Box,
  Checkbox,
  TextField,
  Link,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // vendor: false,
      // customer: false,
      // email: "test@test.com",
      // password: "testtest",
    },
  });

  const sendData = (data) => {
    console.log("login data", data);

    signIn("credentials", {
      email: data.email,
      password: data.password,
      role: data.vendor ? "vendor" : "customer",
      callbackUrl: "/", // Where to redirect after log in
    });
  };

  console.log("errors", errors);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "45%",
          height: "fit-content",
          p: 2,
          mt: 16,
        }}
        elevation={2}
      >
        <form onSubmit={handleSubmit(sendData)}>
          <Container>
            <Typography sx={{ mt: 2, fontSize: "22px", fontWeight: "bold" }}>
              Log In
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                mt: 2,
                mb: 2,
                alignItems: "center",
              }}
            >
              <Checkbox
                {...label}
                {...register("vendor")}
                sx={{
                  color: "#334576",
                  "&.Mui-checked": {
                    color: "#334576",
                  },
                }}
              />
              <Typography sx={{ fontSize: "16px", fontWeight: "bold", mr: 2 }}>
                Vendor
              </Typography>
              <Checkbox
                {...label}
                {...register("customer")}
                sx={{
                  color: "#334576",
                  "&.Mui-checked": {
                    color: "#334576",
                  },
                }}
              />
              <Typography sx={{ fontSize: "16px", fontWeight: "bold", mr: 2 }}>
                Customer
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mb: 2,
                width: "100%",
              }}
            >
              <Typography sx={{ fontWeight: "bold", mb: 0.5 }}>
                Email
              </Typography>
              <TextField
                {...register("email", {
                  required: true,
                })}
                sx={{ width: "90%", bgcolor: "#eeeeee", p: 1, width: "100%" }}
                variant="standard"
                InputProps={{ disableUnderline: true }}
              ></TextField>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
              <Typography sx={{ fontWeight: "bold", mb: 0.5 }}>
                Password
              </Typography>
              <TextField
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
                sx={{ width: "90%", bgcolor: "#eeeeee", p: 1, width: "100%" }}
                variant="standard"
                InputProps={{ disableUnderline: true }}
                type="password"
              ></TextField>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  {...label}
                  {...register("remember")}
                  sx={{
                    color: "#334576",
                    "&.Mui-checked": {
                      color: "#334576",
                    },
                  }}
                />
                <Typography sx={{ fontSize: "14px" }}>Remember Me</Typography>
              </Box>
              <Link underline="none">
                <Typography sx={{ color: "#245cbc", fontSize: "14px" }}>
                  Forgot Password?
                </Typography>
              </Link>
            </Box>
            <Button
              sx={{
                width: "100%",
                bgcolor: "#245cbc",
                mt: 2,
                p: 1.5,
                "&:hover": { bgcolor: "#334576" },
              }}
              type="submit"
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                Log In
              </Typography>
            </Button>
          </Container>
        </form>
      </Paper>
    </Container>
  );
}
