import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Grid from "@mui/material/Grid";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  let navigate = useNavigate();
  return (
    <div className="teee">
      <Grid
        onClick={() => {
          navigate(`/`);
        }}
        className="icons"
        item
      >
        <HomeIcon sx={{ fontSize: "80px" }} />
      </Grid>
      <Grid
        onClick={() => {
          navigate(`report/allprojectbudgetplot`);
        }}
        className="icons"
        item
      >
        <AnalyticsIcon sx={{ fontSize: "80px" }} />
      </Grid>
      <Grid
        onClick={() => {
          navigate(`report/pdfreport`);
        }}
        className="icons"
        item
      >
        <PictureAsPdfIcon sx={{ fontSize: "80px" }} />
      </Grid>
    </div>
  );
}
