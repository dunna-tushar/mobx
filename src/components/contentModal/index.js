import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Modal,
  Fade,
  Button,
  ThemeProvider,
  useTheme
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import YouTubeIcon from "@mui/icons-material/YouTube";
import axios from "axios";
import { unavailableLandscape, img_500, unavailable ,REACT_APP_API_KEY} from "../../config";
import Carousel from "../Carousels";
import "./content.css";

const useStyles = makeStyles(() =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      width: "90%",
      height: "80%",
      backgroundColor: "#39445a",
      border: "1px solid #282c34",
      borderRadius: 10,
      color: "white",
    //   boxShadow: theme.shadows[5],
    //   padding: theme.spacing(1, 1, 3),
    },
  })
);



const ContentModal = ({ children, media_type, id }) => {
    const theme = useTheme();
  const classes = useStyles();
const [open, setOpen] = useState(false);
const [content, setContent] = useState();
const [video, setVideo] = useState();

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const fetchData = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${REACT_APP_API_KEY}&language=en-US`
  );

  setContent(data);
};

const fetchVideo = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${REACT_APP_API_KEY}&language=en-US`
  );

  setVideo(data.results[0]?.key);
};

useEffect(() => {
  fetchData();
  fetchVideo();
}, []);

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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        // className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div >
              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>

                  <div>
                    <Carousel id={id} media_type={media_type} />
                  </div>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </ThemeProvider>
  );
};

export default ContentModal;
