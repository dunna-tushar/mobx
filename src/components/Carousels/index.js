import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { noPicture, img_300, REACT_APP_API_KEY } from "../../config";
import "./carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Carousels = () => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/507086/credits?api_key=${REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setCredits(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const items = [
    <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  ];
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      items={items}
      responsive={responsive}
      // items={credits.map((c) => (
      //   <div className="carouselItem">
      //     <img
      //       src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
      //       alt={c?.name}
      //       onDragStart={handleDragStart}
      //       className="carouselItem__img"
      //     />
      //     <b className="carouselItem__txt">{c?.name}</b>
      //   </div>
      // ))}
      autoPlay
    />
  );
};

export default Carousels;
