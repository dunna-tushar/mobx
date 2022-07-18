import React,{useState,useEffect} from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      backgroundColor: "#2d313a !important",
      zIndex: 100,
    },
  })
);

const theme = createTheme();

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    if(value === 0){
        navigate('/')
    }else if(value === 1){
        navigate('/movies')
    }
    else if(value === 2){
        navigate('/series')
    }else if(value === 3){
        navigate('/search')
    }
  }, [navigate,value])
  

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
      <BottomNavigationAction
        label="Trending"
        icon={<WhatshotIcon />}
        style={{ color: "white" }}
      />
        <BottomNavigationAction
          label="Movie"
          icon={<MovieIcon />}
          style={{ color: "white" }}
        />
        <BottomNavigationAction
          label="Tv Series"
          icon={<TvIcon />}
          style={{ color: "white" }}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          style={{ color: "white" }}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
}
