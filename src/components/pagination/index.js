import React from "react";
import { Pagination as Pg, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const Pagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={theme}>
        <Stack spacing={2}>
          <Pg
            count={numOfPages}
            hideNextButton
            hidePrevButton
            color="primary"
            onChange={(e) => handlePageChange(e.target.textContent)}
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default Pagination;
