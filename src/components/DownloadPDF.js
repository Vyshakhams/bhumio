import React from "react";
import projectsData from "../data/projectsData";
import PDFReport from "./PDFReport";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Button from "@mui/material/Button";

export default function DownlaodPDF() {
  return (
    <div className="rectangle">
      <h1 className="projectText">Project Details</h1>
      <table>
        <tr>
          <th>ProjectID</th>
          <th>Project Name</th>
          <th>Budget ₹ Crore</th>
        </tr>

        <hr class="new4" />
        {projectsData.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.projectName}</td>
            <td>{item.budget}</td>
          </tr>
        ))}
      </table>

      <PDFDownloadLink
        className="downlo"
        document={<PDFReport />}
        filename="FORM"
      >
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <Button variant="contained">Download PDF</Button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}
