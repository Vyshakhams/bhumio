import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projectsData";

export default function Cart() {
  let params = useParams();
  const projectInfo = projectsData[params.id - 1];

  const nameInfo = (
    <div className="rect">
      <div> Project ID : {projectInfo.id} </div>
      <div>
        {" "}
        Project Name : <b>{projectInfo.projectName} </b>
      </div>
      <div>
        Project Manager : <b>{projectInfo.projectManager}</b>
      </div>
      <div> Start Date : {projectInfo.startDate}</div>
    </div>
  );

  const supplierInfo = (
    <div className="rect">
      <div> Project ID : {projectInfo.id} </div>
      <div>
        {" "}
        Project Name : <b>{projectInfo.projectName} </b>
      </div>
      <div>
        Project Manager : <b>{projectInfo.projectManager}</b>
      </div>
      <div> Start Date : {projectInfo.startDate}</div>
    </div>
  );

  const SiteAddress = (
    <div className="rect">
      <div> Supplier 1 : {projectInfo.supplier1} </div>
      <div> Contact Person : {projectInfo.contactPerson} </div>
      <div>
        Phone : <b>{projectInfo.phone}</b>
      </div>
      <div> email : {projectInfo.email}</div>
    </div>
  );

  const projectStatus = (
    <div className="rect">
      <div>
        {" "}
        Project Status :{" "}
        {projectInfo.projectStatus.map((i) => (
          <div key={i}>{i}</div>
        ))}{" "}
      </div>
    </div>
  );

  return (
    <>
      <label className="extra">
        {nameInfo}
        {supplierInfo}
        {SiteAddress}
        {projectStatus}
      </label>
    </>
  );
}
