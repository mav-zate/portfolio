import Box from "@mui/system/Box";
import Stack from "@mui/system/Stack";
import { NavLink, Outlet } from "react-router-dom";
import PageContainer from "./PageContainer";

export default function Layout() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Stack direction="row" gap={1}>
          <NavLink to="/about-me">About Me</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </Stack>
      </Box>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
}
