import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import projectsData from "../data/projectsData";
import {
  TableHeader,
  TableCell,
  Table,
  DataTableCell,
  TableBody,
} from "@david.kucsai/react-pdf-table";

const peopleList = projectsData.map((details) => ({
  id: details.id,
  projectName: details.projectName,
  budget: details.budget,
}));

export default function PDFReport() {
  return (
    <Document>
      <Page>
        <Table data={peopleList}>
          <TableHeader>
            <TableCell>Project ID</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Budget</TableCell>
          </TableHeader>
          <TableBody>
            <DataTableCell getContent={(r) => r.id} />
            <DataTableCell getContent={(r) => r.projectName} />
            <DataTableCell getContent={(r) => r.budget} />
          </TableBody>
        </Table>
      </Page>
    </Document>
  );
}
