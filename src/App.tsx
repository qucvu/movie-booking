import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "Pages/Home/Footer/Footer";
import { Box } from "@mui/material";
import AppDesc from "Pages/Home/AppDesc/AppDesc";
import CinemaSystem from "Pages/Home/CinemaSystem/CinemaSystem";

function App() {
  return (
    <Box>
      {/* <CinemaSystem /> */}
      <AppDesc />
      <Footer />
    </Box>
  );
}

export default App;
