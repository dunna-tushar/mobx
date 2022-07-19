import React, { useState, useEffect } from "react";
import axios from "axios";
import Singlecontent from "../../components/SingleContent";
import Pagination from "../../components/pagination";
import { REACT_APP_API_KEY } from "../../config";
import "./trending.css";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  function fetchContent() {
    return axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_API_KEY}&page=${page}`
      )
      .then((res) => {
        if (res && res.status === 200) {
          setContent(res?.data?.results);
        }
      })
      .catch((err) => console.log(err));
  }


  useEffect(() => {
    window.scroll(0, 0);
    fetchContent();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <div className="trending">
        {Array.isArray(content) &&
          content.map((c) => (
            <Singlecontent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <Pagination setPage={setPage} />
    </div>
  );
};

export default Trending;
