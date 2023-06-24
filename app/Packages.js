import {
  Container,
  Stack,
  Box,
  Paper,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export default function Packages() {
  const plans = [
    {
      title: "Premium Plan",
      cost: "600",
      backgroundColor: "white",
      per: "year",
      fontColor: "black",
      buttonColor: "#334576",
    },
    {
      title: "Basic Plan",
      cost: "60",
      backgroundColor: "#334576",
      per: "month",
      fontColor: "white",
      buttonColor: "white",
    },
    {
      title: "Random Plan",
      cost: "50",
      backgroundColor: "white",
      per: "week",
      fontColor: "black",
      buttonColor: "#334576",
    },
  ];
  return (
    <Container sx={{ display: "flex", flexDirection: "row" }}>
      {plans.map((plan, index) => (
        <Paper
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "32%",
            bgcolor: plan.backgroundColor,
            borderRadius: "10px",
            mr: 2,
            mb: 10,
          }}
          elevation={4}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "110px",
              justifyContent: "center",
              mb: 6,
            }}
          >
            <Typography
              sx={{ color: "#bc245c", fontSize: "50px", mr: 0.5, mt: 2 }}
            >
              GH₵
            </Typography>
            <Typography sx={{ color: "#bc245c", fontSize: "100px" }}>
              {plan.cost}
            </Typography>
            <Typography sx={{ color: "#bc245c", alignSelf: "flex-end" }}>
              /{plan.per}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "20px", color: plan.fontColor, mb: 5 }}>
              {plan.title}
            </Typography>
            <Divider sx={{ width: "30%", bgcolor: plan.fontColor, mb: 4 }} />
          </Box>
          <Container sx={{ display: "flex", flexDirection: "column", mb: 8 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                .
              </Typography>
              <DoneIcon sx={{ mt: 0.75, color: "#4db4f9" }}></DoneIcon>
              <Typography
                sx={{
                  fontSize: "20px",
                  ml: 1,
                  fontSize: "16px",
                  color: plan.fontColor,
                }}
              >
                Deeply Customized Search List
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                .
              </Typography>
              <DoneIcon sx={{ mt: 0.75, color: "#4db4f9" }}></DoneIcon>
              <Typography
                sx={{
                  fontSize: "20px",
                  ml: 1,
                  fontSize: "16px",
                  color: plan.fontColor,
                }}
              >
                All Best Review Clients
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                .
              </Typography>
              <DoneIcon sx={{ mt: 0.75, color: "#4db4f9" }}></DoneIcon>
              <Typography
                sx={{
                  fontSize: "20px",
                  ml: 1,
                  fontSize: "16px",
                  color: plan.fontColor,
                }}
              >
                VIP Support/Priority Support
              </Typography>
            </Box>
          </Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                bgcolor: plan.buttonColor,
                mb: 6,
                p: 1,
                width: "45%",
                borderRadius: "25px",
                fontSize: "20px",
                color: plan.backgroundColor,
              }}
            >
              Click Here
            </Button>
          </Box>
        </Paper>
      ))}
    </Container>
  );
}
