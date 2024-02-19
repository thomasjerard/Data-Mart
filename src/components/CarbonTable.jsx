import React from 'react'
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableSelectAll,
  TableSelectRow
} from '@carbon/react';

function CarbonTable() {

  const rows = [
    {
      attached_groups: 'Kevin’s VM Groups',
      id: 'a',
      name: 'Load Balancer 3',
      port: 3000,
      protocol: 'HTTP',
      rule: 'Round robin',
      status: <a disabled href="#">Disabled</a>
    },
    {
      attached_groups: 'Maureen’s VM Groups',
      id: 'b',
      name: 'Load Balancer 1',
      port: 443,
      protocol: 'HTTP',
      rule: 'Round robin',
      status: <a href="#">Starting</a>
    },
    {
      attached_groups: 'Andrew’s VM Groups',
      id: 'c',
      name: 'Load Balancer 2',
      port: 80,
      protocol: 'HTTP',
      rule: 'DNS delegation',
      status: <a href="#">Active</a>
    },
    {
      attached_groups: 'Marc’s VM Groups',
      id: 'd',
      name: 'Load Balancer 6',
      port: 3000,
      protocol: 'HTTP',
      rule: 'Round robin',
      status: <a disabled href="#">Disabled</a>
    },
    {
      attached_groups: 'Mel’s VM Groups',
      id: 'e',
      name: 'Load Balancer 4',
      port: 443,
      protocol: 'HTTP',
      rule: 'Round robin',
      status: <a href="#">Starting</a>
    },
    {
      attached_groups: 'Ronja’s VM Groups',
      id: 'f',
      name: 'Load Balancer 5',
      port: 80,
      protocol: 'HTTP',
      rule: 'DNS delegation',
      status: <a href="#">Active</a>
    }
];

const headers = [
  {
    header: 'Name',
    key: 'name'
  },
  {
    header: 'Protocol',
    key: 'protocol'
  },
  {
    header: 'Port',
    key: 'port'
  },
  {
    header: 'Rule',
    key: 'rule'
  },
  {
    header: 'Attached groups',
    key: 'attached_groups'
  },
  {
    header: 'Status',
    key: 'status'
  }
];
  return (
    <div>
      <DataTable rows={rows} headers={headers}>
      {({ rows, headers, getTableProps, getHeaderProps, getRowProps, getSelectionProps, selectedRows }) => (
        <Table {...getTableProps()}>       
          <TableHead>
            <TableRow>
              <TableSelectAll {...getSelectionProps()}></TableSelectAll>  
              {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header, isSortable: true })}>
                    {header.header}
                  </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow {...getRowProps({ row })}>
                <TableSelectRow {...getSelectionProps({row})}></TableSelectRow>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </DataTable>
    </div>
  )
}

export default CarbonTable