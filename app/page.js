"use client";
import Navbar from "./Navbar";
import Cover from "./Cover";
import LandingPage from "./LandingPage";
import { CssBaseline, Stack } from "@mui/material";

export default function Home() {
  return (
    <CssBaseline>
      <Stack direction={"column"}>
        <Navbar></Navbar>
        <Cover></Cover>
        <LandingPage></LandingPage>
      </Stack>
    </CssBaseline>
  );
}
