import React from "react";
import projectsData from "../data/projectsData";
import { Line } from "react-chartjs-2";

export default function Allprojectbudgetplot() {
  return (
    <div className="chart">
      <Line
        display={true}
        text="aiai"
        data={{
          labels: projectsData.map((i) => {
            return i.id;
          }),
          datasets: [
            {
              id: 1,
              label: "Project Budget",
              data: projectsData.map((i) => {
                return i.budget;
              }),
              borderColor: "rgb(255, 99, 132)",
            },
          ],
        }}
        height={70}
      />
    </div>
  );
}
