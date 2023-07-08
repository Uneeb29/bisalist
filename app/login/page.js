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
    formState: { errors },
  } = useForm({
    defaultValues: {
      // vendor: false,
      // customer: false,
      // email: "test@test.com",
      // password: "12345678",
    },
  });

  async function sendData(data) {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      role: data.vendor ? "vendor" : "customer",
      redirect: true,
      callbackUrl: "/check", // Where to redirect after log in
    });
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          mb: 6,
        }}
        elevation={2}
      >
        <form onSubmit={handleSubmit(sendData)}>
          <Container>
            <Typography
              sx={{ mt: 2, fontSize: "22px", fontWeight: "bold", mb: 4 }}
            >
              Log In
            </Typography>
            {/* <Box
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
            </Box> */}
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
      <Box
        sx={{
          //transform: "translate(-50%, -50%)",
          width: "45%",
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            mb: 2,
            alignSelf: "center",
          }}
        >
          Don't have an account?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Link
            href="becomecustomer"
            sx={{
              bgcolor: "#245cbc",
              color: "white",
              borderRadius: "8px",
              p: 1,
              width: "40%",
              display: "flex",
              justifyContent: "center",
              "&:hover": { bgcolor: "#334576" },
            }}
            underline="none"
          >
            <Typography>Become a Customer</Typography>
          </Link>
          <Link
            href="\becomevendor"
            sx={{
              bgcolor: "#245cbc",
              color: "white",
              borderRadius: "8px",
              p: 1,
              width: "40%",
              display: "flex",
              justifyContent: "center",
              "&:hover": { bgcolor: "#334576" },
            }}
            underline="none"
          >
            <Typography>Become a Vendor</Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
