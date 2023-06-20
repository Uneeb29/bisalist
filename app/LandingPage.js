import {
  Stack,
  Typography,
  Box,
  Divider,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import DoneIcon from "@mui/icons-material/Done";
export default function LandingPage() {
  return (
    <Stack direction={"column"} sx={{ mt: 4 }}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            left: "35vw",
            zIndex: "-1",
            opacity: "0.1",
            fontSize: "60px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Fix it services
        </Typography>
        <Typography
          sx={{
            color: "#607d8b",
            fontSize: "30px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          The latest listings
        </Typography>
      </Box>
      <Divider
        sx={{
          mt: 2,
          width: "5rem",
          bgcolor: "#4db4f9",
          alignSelf: "center",
          borderTopWidth: "2px",
          borderRadius: "2px",
          mb: 10,
        }}
      />
      <Card
        sx={{
          backgroundImage: 'url("electrician.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "30%",
          ml: 2,
          mb: 2,
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <CardContent>
          <Stack direction={"column"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mb: 10,
              }}
            >
              <Box
                sx={{
                  bgcolor: "#334576",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  p: 0.7,
                  cursor: "pointer",
                }}
              >
                <FavoriteBorderIcon
                  sx={{
                    color: "white",
                    height: "20px",
                    "&:hover": {
                      color: "#4db4f9",
                    },
                  }}
                ></FavoriteBorderIcon>
              </Box>
              <Box
                sx={{
                  p: 0.5,
                  borderRadius: "20px",
                  bgcolor: "grey",
                  width: "30%",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#1de9b6",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 0.75,
                  }}
                >
                  <LockOpenRoundedIcon
                    sx={{ color: "white", height: "15px", width: "20px" }}
                  ></LockOpenRoundedIcon>
                  <Typography sx={{ color: "white", fontSize: "12px" }}>
                    Now Open
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography sx={{ color: "white", fontWeight: "bold", mr: 2 }}>
                Electrician
              </Typography>
              <Box
                sx={{
                  borderRadius: "50%",
                  bgcolor: "#1de9b6",
                  width: "5%",
                  height: "15%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DoneIcon
                  sx={{ color: "white", height: "15px", width: "15px" }}
                ></DoneIcon>
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "white", mb: 2 }}></Divider>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ color: "white", mr: 2, fontSize: "14px" }}>
                Electrician
              </Typography>
              <Box
                sx={{
                  borderRadius: "50%",
                  height: "20px",
                  width: "20px",
                  backgroundImage: 'url("electrician.jpg")',
                  mr: 2,
                }}
              ></Box>
              <Typography sx={{ color: "white", fontSize: "14px" }}>
                By, admin
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
