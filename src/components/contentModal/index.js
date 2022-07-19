import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Modal,
  Fade,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import YouTubeIcon from "@mui/icons-material/YouTube";
import axios from "axios";
import { unavailableLandscape, img_500, unavailable } from "../../config";
import Carousels from "../Carousels";
import "./content.css";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     modal: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     paper: {
//       width: "90%",
//       height: "80%",
//       backgroundColor: "#39445a",
//       border: "1px solid #282c34",
//       borderRadius: 10,
//       color: "white",
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(1, 1, 3),
//     },
//   })
// );

const theme = createTheme();

const ContentModal = ({ children, media_type, id }) => {
//   const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export default ContentModal;
