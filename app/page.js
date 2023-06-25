"use client";
import Cover from "../Components/Cover";
import { CssBaseline, Stack } from "@mui/material";
import ServiceCard from "../Components/ServiceCard";
import LandingPage from "../Components/Listings";
import PopularPlaces from "../Components/PopularPlaces";
import Packages from "../Components/Packages";
import Testimonials from "../Components/testimonials";

export default function Home() {
  return (
    <CssBaseline>
      <Stack direction={"column"}>
        <Cover></Cover>
        <LandingPage></LandingPage>
        <ServiceCard></ServiceCard>
        <PopularPlaces></PopularPlaces>
        <Packages></Packages>
        <Testimonials></Testimonials>
        </Stack>
    </CssBaseline>
  );
}
