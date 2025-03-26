import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const theme = createTheme({
  primaryColor: "okeo-blue",
  colors: {
    "okeo-blue": [
      "#7bd7ea",
      "#65d1e6",
      "#50cae2",
      "#3ac3df",
      "#24bddb",
      "#20aac5",
      "#20a6c1",
      "#1d97af",
      "#19849a",
      " #157184",
    ],
    "okeo-yellow": [
      "#fff399",
      "#fff080",
      "#ffed66",
      "#ffea4d",
      "#ffe733",
      "#ffe41a",
      "#ffe100",
      "#e6cb00",
      "#ccb400",
      " #b39e00",
    ],
    "okeo-red": [
      "#fbd0d7",
      "#f9b9c2",
      "#f7a1ae",
      "#f58a9a",
      "#f37286",
      "#f15b71",
      "#ef435e",
      "#ed2c49",
      "#eb1435",
      " #d3122f",
    ],
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
