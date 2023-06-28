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
  
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  
  export default function Login() {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          pb: 5,
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
              <Typography sx={{ fontWeight: "bold", mb: 0.5 }}>Email</Typography>
              <TextField
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
        </Paper>
      </Container>
    );
  }