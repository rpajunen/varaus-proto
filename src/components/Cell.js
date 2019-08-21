import React from "react";
import { Table } from "semantic-ui-react";

const Cell = ({ negative, positive, text }) => {
  return (
    <Table.Cell negative={negative} positive={positive}>
      {text}
    </Table.Cell>
  );
};

export default Cell;
