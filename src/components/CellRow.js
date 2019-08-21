import React from "react";
import { Table } from "semantic-ui-react";
import Cell from "../components/Cell";

const printCells = ({ data }) => {
  return data.map((element, index) => (
    <Cell
      key={index}
      negative={!element.available}
      positive={element.available}
      text={element.available ? "vapaa" : "varattu"}
    />
  ));
};

const CellRow = data => {
  return (
    <Table.Row>
      {/* <Table.Cell>{data.data[0].room}</Table.Cell> */}
      <Table.Cell>{data.data.room}</Table.Cell>
      {printCells(data.data)}
    </Table.Row>
  );
};

export default CellRow;
