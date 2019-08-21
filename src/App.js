import React from "react";
import { Table } from "semantic-ui-react";
import CellRow from "./components/CellRow";

const huone1Data = [
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "6",
    available: false,
    reservedBy: "roope"
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "7",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "8",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "9",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "10",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "11",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "12",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "13",
    available: false,
    reservedBy: "sini"
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "14",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "15",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "16",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "17",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "18",
    available: false,
    reservedBy: "nasu"
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "19",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "20",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 1",
    date: "21.8.2019",
    start: "21",
    available: true,
    reservedBy: null
  }
];
const huone2Data = [
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "6",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "7",
    available: false,
    reservedBy: "roope"
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "8",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "9",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "10",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "11",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "12",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "13",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "14",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "15",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "16",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "17",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "18",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "19",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "20",
    available: false,
    reservedBy: "nasu"
  },
  {
    room: "huone 2",
    date: "21.8.2019",
    start: "21",
    available: true,
    reservedBy: null
  }
];
const huone3Data = [
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "6",
    available: false,
    reservedBy: "roope"
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "7",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "8",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "9",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "10",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "11",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "12",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "13",
    available: false,
    reservedBy: "sini"
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "14",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "15",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "16",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "17",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "18",
    available: false,
    reservedBy: "nasu"
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "19",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "20",
    available: true,
    reservedBy: null
  },
  {
    room: "huone 3",
    date: "21.8.2019",
    start: "21",
    available: true,
    reservedBy: null
  }
];

const allData = [
  {
    room: "huone 1",
    data: [
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "6",
        available: false,
        reservedBy: "roope"
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "7",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "8",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "9",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "10",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "11",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "12",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "13",
        available: false,
        reservedBy: "sini"
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "14",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "15",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "16",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "17",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "18",
        available: false,
        reservedBy: "nasu"
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "19",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "20",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 1",
        date: "21.8.2019",
        start: "21",
        available: true,
        reservedBy: null
      }
    ]
  },
  {
    room: "huone 2",
    data: [
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "6",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "7",
        available: false,
        reservedBy: "roope"
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "8",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "9",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "10",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "11",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "12",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "13",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "14",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "15",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "16",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "17",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "18",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "19",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "20",
        available: false,
        reservedBy: "nasu"
      },
      {
        room: "huone 2",
        date: "21.8.2019",
        start: "21",
        available: true,
        reservedBy: null
      }
    ]
  },
  {
    room: "huone 3",
    data: [
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "6",
        available: false,
        reservedBy: "roope"
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "7",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "8",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "9",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "10",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "11",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "12",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "13",
        available: false,
        reservedBy: "sini"
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "14",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "15",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "16",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "17",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "18",
        available: false,
        reservedBy: "nasu"
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "19",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "20",
        available: true,
        reservedBy: null
      },
      {
        room: "huone 3",
        date: "21.8.2019",
        start: "21",
        available: true,
        reservedBy: null
      }
    ]
  }
];

const App = () => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Huone</Table.HeaderCell>
          <Table.HeaderCell>6</Table.HeaderCell>
          <Table.HeaderCell>7</Table.HeaderCell>
          <Table.HeaderCell>8</Table.HeaderCell>
          <Table.HeaderCell>9</Table.HeaderCell>
          <Table.HeaderCell>10</Table.HeaderCell>
          <Table.HeaderCell>11</Table.HeaderCell>
          <Table.HeaderCell>12</Table.HeaderCell>
          <Table.HeaderCell>13</Table.HeaderCell>
          <Table.HeaderCell>14</Table.HeaderCell>
          <Table.HeaderCell>15</Table.HeaderCell>
          <Table.HeaderCell>16</Table.HeaderCell>
          <Table.HeaderCell>17</Table.HeaderCell>
          <Table.HeaderCell>18</Table.HeaderCell>
          <Table.HeaderCell>19</Table.HeaderCell>
          <Table.HeaderCell>20</Table.HeaderCell>
          <Table.HeaderCell>21</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {/* <CellRow data={huone1Data} />
        <CellRow data={huone2Data} />
        <CellRow data={huone3Data} /> */}

        {allData.map((data, index) => (
          <CellRow key={index} data={data} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default App;
