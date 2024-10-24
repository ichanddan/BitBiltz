import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import React from "react";

interface Column {
  uid: string;
  name: string;
}

interface Props {
  columns: Column[];
  tableData: any[];
  renderTable?: (row: any, uid: string) => React.ReactNode;
}
const NTable = ({ columns, tableData, renderTable = getKeyValue }: Props) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Table
        aria-label="table"
        color="success"
        selectionMode="multiple"
        isStriped
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {tableData &&
            tableData.map((row, i) => (
              <TableRow key={i}>
                {columns.map((column) => (
                  <TableCell key={column.uid}>
                    {renderTable
                      ? renderTable(row, column.uid)
                      : getKeyValue(row, column.uid)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NTable;
