import {
  Container,
  FormControl,
  Stack,
  Typography,
  Box,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";

export default function BecomeCustomer() {
  return (
    <Stack
      sx={{
        width: "100vw",
        bgcolor: "#eeeeee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "white",
          width: "45%",
          mt: 10,
          borderRadius: "8px",
          mb: 4,
        }}
      >
        <Typography sx={{ mt: 4, fontWeight: "bold", fontSize: "20px", mb: 4 }}>
          Register
        </Typography>
        <FormControl>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 1 }}>
              Name
            </Typography>
            <TextField
              placeholder="Name"
              size="small"
              sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
              variant="standard"
              InputProps={{ disableUnderline: true }}
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 1 }}>
              Email address
            </Typography>
            <TextField
              placeholder="Email address"
              size="small"
              sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
              variant="standard"
              InputProps={{ disableUnderline: true }}
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 1 }}>
              Phone Number
            </Typography>
            <TextField
              placeholder="(123) 456-7890"
              size="small"
              sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
              variant="standard"
              InputProps={{ disableUnderline: true }}
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 1 }}>
              Password(Minimum 8 characters)
            </Typography>
            <TextField
              placeholder="Password"
              size="small"
              sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
              variant="standard"
              InputProps={{ disableUnderline: true }}
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 1 }}>
              Confirm Password
            </Typography>
            <TextField
              placeholder="Confirm Password"
              size="small"
              sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
              variant="standard"
              InputProps={{ disableUnderline: true }}
            ></TextField>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Checkbox></Checkbox>
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
            <Checkbox></Checkbox>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              I agree to the service agreement and terms of the Membership
              Agreement.
            </Typography>
          </Box>
          <Box sx={{ width: "100%", mb: 4 }}>
            <Button
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                bgcolor: "#245cbc",
                color: "white",
                width: "100%",
                p: 1.5,
              }}
            >
              Register
            </Button>
          </Box>
        </FormControl>
      </Container>
    </Stack>
  );
}
