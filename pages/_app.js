import { createTheme, NextUIProvider } from "@nextui-org/react";
import "sf-font";

import Navbar from "@/Components/Navbar/Navbar.js";

const theme = createTheme({
  type: "dark",
  theme: {
    fontFamily: "SF Pro Display",
    colors: {
      primaryLight: "$blue200",
      primaryLightHover: "$blue300",
      primaryLightActive: "$blue400",
      primaryLightContrast: "$blue600",
      primary: "$purple500",
      primaryBorder: "$blue500",
      primaryBorderHover: "$blue600",
      primarySolidHover: "$blue700",
      primarySolidContrast: "$white",
      primaryShadow: "$white500",
      transparent: "#00000000",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple300 90%)",
      link: "#5E1DAD",

      myColor: "#00000030",
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ background: "black" }}>
      <Navbar />
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </div>
  );
}

export default MyApp;
