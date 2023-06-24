"use client";
import Navbar from "./Navbar";
import Cover from "./Cover";
import { CssBaseline, Stack } from "@mui/material";
import ServiceCard from "./ServiceCard";
import BecomeCustomer from "./BecomeCustomer";
import Footer from "./Footer";
import LandingPage from "./Listings";
import PopularPlaces from "./PopularPlaces";
import Packages from "./Packages";
import BecomeVendor from "./BecomeVendor";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <CssBaseline>
      <Stack direction={"column"}>
        <Navbar></Navbar>
        <Cover></Cover>
        <LandingPage></LandingPage>
        <ServiceCard></ServiceCard>
        <PopularPlaces></PopularPlaces>
        <Packages></Packages>
        <Testimonials></Testimonials>
        <Footer></Footer>
        {/* <Navbar></Navbar>
        <Cover></Cover>
        <LandingPage></LandingPage>
        <ServiceCard></ServiceCard> */}
        {/* <BecomeCustomer></BecomeCustomer> */}
        {/* <BecomeVendor></BecomeVendor> */}
      </Stack>
    </CssBaseline>
  );
}
