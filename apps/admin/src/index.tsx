import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CssBaseline } from "@mui/material";
import '@vidovicblaz19/shared-ui/styles.css'
import 'highlight.js/styles/atom-one-light.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
);
