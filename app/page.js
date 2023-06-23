"use client";
import Navbar from "./Navbar";
import Cover from "./Cover";
import LandingPage from "./LandingPage";
import { CssBaseline, Stack } from "@mui/material";
import ServiceCard from "./ServiceCard";
import BecomeCustomer from "./BecomeCustomer";
import Footer from "./Footer";
import LandingPage from "./Listings";
import PopularPlaces from "./PopularPlaces";
import Packages from "./Packages";

export default function Home() {
  return (
    <CssBaseline>
      <Stack direction={"column"}>
        <Navbar></Navbar>
        <Cover></Cover>
        <LandingPage></LandingPage>
        <PopularPlaces></PopularPlaces>
        <Packages></Packages>
        <Footer></Footer>
        {/* <Navbar></Navbar>
        <Cover></Cover>
        <LandingPage></LandingPage>
        <ServiceCard></ServiceCard> */}
        {/* <BecomeCustomer></BecomeCustomer> */}
      </Stack>
    </CssBaseline>
  );
}
