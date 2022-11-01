import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import projectsData from "../data/projectsData";
export default function Dashboard(props) {
  let navigate = useNavigate();
  return (
    <>
      <Menu />
      <label className="extra">
        {projectsData.map((i) => (
          <div
            key={i.id}
            className="rect"
            onClick={() => {
              navigate(`cart/${i.id}`);
            }}
          >
            <div> Project ID : {i.id} </div>
            <div> Project Name : {i.projectName} </div>
            <div>
              {" "}
              Budget : <b>${i.budget}</b>
            </div>
            <div> End Date : {i.endDate}</div>
          </div>
        ))}
      </label>
    </>
  );
}
