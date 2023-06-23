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

import {useForm} from 'react-hook-form';

export default function BecomeCustomer() {

  // default values added here only for testing purposes and will be removed later
  const {register,getValues, setError, handleSubmit,watch, formState: {errors}} = useForm({
    defaultValues : {
        name: "Ilean Dover",
        email: "test123@gmail.com",
        phone: "1234567890",
        password: "kanyeLeast",
        // c_password: "kanyeLeast",
        // spec_email: true,
        // agreement: true
        // boxes arent getting checked so removing these
    }
  });

  console.log("Errors: ",errors);

  // function handleConfirmationChange(){
  //   const validation = getValues("c_password");
  //   console.log(validation);
  //   const password = getValues("password");

  //   if(validation===password){
  //     setError("c_password", {
  //       type: "string",
  //       message: "",
  //     })
  //   }
  //   else{
  //     setError("c_password", {
  //       type: "string",
  //       message: "Passwords don't match",
  //   });
  //    }
  // }


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
    <form onSubmit={handleSubmit((data)=>{
      console.log(data);
    })} >

        <FormControl>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 1 }}>
              Name
            </Typography>
            <p style={{color : "red"}} >{errors.name?.message}</p>
            <TextField
              {...register("name" , {required : "Name is required."})}

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
            <p style={{color : "red"}} >{errors.email?.message}</p>
            <TextField
            {...register("email" , {required: "Email Address is required."})}
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
            <p style={{color : "red"}} >{errors.phone?.message}</p>

            <TextField
            {...register("phone" , {required : "Phone Number is required."})}
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
            <p style={{color : "red"}} >{errors.password?.message}</p>

            <TextField
            {...register("password", {required: "Password is required.", minLength : {
              value : 8,
              message : "Minimum 8 characters required."
            }} )}
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
            <p style={{color : "red"}} >{errors.c_password?.message}</p>

            <TextField
            {...register("c_password",{required: "This field is required.", minLength : {
              value : 8,
              message : "Minimum 8 characters required."
            }})}
              placeholder="Confirm Password"
              size="small"
              sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: "5px" }}
              variant="standard"
              // onChange={handleConfirmationChange}
              InputProps={{ disableUnderline: true }}
            ></TextField>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Checkbox {...register("spec_email")} ></Checkbox>
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

            <Checkbox {...register("agreement", {required: "Accepting the agreement is mandatory."})} ></Checkbox>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {errors.agreement?.message}
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

              type="submit"
            >
              Register
            </Button>
          </Box>
        </FormControl>
      </form>

      </Container>
    </Stack>
  );
}
