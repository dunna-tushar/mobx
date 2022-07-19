import React from "react";
import { Badge } from "@mui/material";
import { img_300, unavailable } from "../../config";
import "./singleContent.css";

const Singlecontent = (props) => {
  const { id, poster, title, date, media_type, vote_average } = props;
  return (
    <>
      <Badge
        badgeContent={Number(vote_average).toFixed(1)}
        color={vote_average > 6 ? "success" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </>
  );
};

export default Singlecontent;
