import {
  Container,
  Box,
  Divider,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
export default function Testimonials() {
  const testimonials = [
    {
      username: "Frank Dellov",
      occupation: "Hotel Owner",
      via: "Twitter",
      comment:
        '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    },
    {
      username: "Andy Dimasky",
      occupation: "Restaurant Owner",
      via: "Facebook",
      comment:
        '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    },
    {
      username: "Linda Svensky",
      occupation: "Shop Owner",
      via: "Instagram",
      comment:
        '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    },
  ];
  return (
    <Container sx={{ display: "flex", flexDirection: "column", mt: 12, mb: 6 }}>
      <Box
        sx={{
          textAlign: "center",
          display: "grid",
          placeItems: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "60px",
            fontWeight: "bold",
            textTransform: "capitalize",
            color: "rgba(0, 0, 0, 0.1)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          Client Reviews
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#607d8b",
            fontSize: "30px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Testimonials
        </Typography>
      </Box>
      <Divider
        sx={{
          mt: 3,
          width: "4rem",
          bgcolor: "#4db4f9",
          alignSelf: "center",
          borderTopWidth: "2px",
          borderRadius: "2px",
          mb: 10,
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {testimonials.map((testimonial, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "35%",
              textAlign: "center",
              mr: 2,
              borderRadius: "10px",
            }}
          >
            {/* <Box
              sx={{
                borderRadius: "50%",
                width: "25%",
                height: "25%",
                position: "relative",
                left: "45%",
                top: "0%",
              }}
            > */}
            <img
              src="picture.jpg"
              style={{
                borderRadius: "50%",
                width: "20%",
                height: "20%",
                position: "relative",
                left: "40%",
                top: "-10%",
              }}
            ></img>
            {/* </Box> */}
            <Box sx={{ width: "20%" }}>
              <FormatQuoteOutlinedIcon
                sx={{
                  color: "#4db4f9",
                  fontSize: "40px",
                  opacity: "0.5",
                }}
              ></FormatQuoteOutlinedIcon>
            </Box>
            <Box
              sx={{
                width: "70%",
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
                mb: 4,
              }}
            >
              <Typography sx={{ fontSize: "14px", color: "#607d8b", mb: 3 }}>
                {testimonial.comment}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#607d8b",
                  fontWeight: "bold",
                  mb: 0.5,
                }}
              >
                {testimonial.username}
              </Typography>
              <Typography
                sx={{ fontSize: "12px", color: "#4db4f9", fontWeight: "bold" }}
              >
                {testimonial.occupation}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "90%",
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <FormatQuoteOutlinedIcon
                sx={{ color: "#4db4f9", fontSize: "40px", opacity: "0.5" }}
              ></FormatQuoteOutlinedIcon>
            </Box>

            <Paper elevation={1} sx={{ width: "30%", mb: 0, p: 1, mx: "auto" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#4db4f9",
                }}
              >
                Via {testimonial.via}
              </Typography>
            </Paper>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
