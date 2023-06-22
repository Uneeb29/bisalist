"use client";
import Navbar from "./Navbar";
import Cover from "./Cover";
import LandingPage from "./LandingPage";
import { CssBaseline, Stack } from "@mui/material";
import ServiceCard from "./ServiceCard";
import BecomeCustomer from "./BecomeCustomer";

export default function Home() {
  return (
    <CssBaseline>
      <Stack direction={"column"}>
        <Navbar></Navbar>
        {/* <Navbar></Navbar>
        <Cover></Cover>
        <LandingPage></LandingPage>
        <ServiceCard></ServiceCard> */}
        <BecomeCustomer></BecomeCustomer>
      </Stack>
    </CssBaseline>
  );
}
