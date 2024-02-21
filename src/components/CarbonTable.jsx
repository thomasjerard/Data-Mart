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


// import React, { useState } from 'react';
// import '../App.scss';
// import {
//   DataTable,
//   Table,
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableBody,
//   TableCell,
//   TableSelectRow,
//   TableSelectAll,
// } from '@carbon/react';

// import Navbar from '../components/Navbar';
// import '../styles/ConsumerPage.scss';

// function ConsumerPage() {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const headers = [
//     {
//       key: 'select',
//       header: () => (
//         <TableSelectAll
//           onChange={(event) =>
//             setSelectedRows(event.target.checked ? rows.map((row) => row.id) : [])
//           }
//           checked={selectedRows.length === rows.length}
//         />
//       ),
//     },
//     {
//       key: 'profile',
//       header: 'Profile',
//     },
//     {
//       key: 'username',
//       header: 'UserName',
//     },
//     {
//       key: 'stage',
//       header: 'Stage',
//     },
//     {
//       key: 'lastviewed',
//       header: 'Last Viewed',
//     },
//   ];
//   const rows = [
//     {
//       id: 'a',
//       profile: 'fejkewke',
//       username: 'Thomas123',
//       stage: 'Consumer',
//       lastviewed: '2020-02-23',
//     },
//     {
//       id: 'b',
//       profile: 'fwhjwehfj',
//       username: 'vaidehi456',
//       stage: 'Consumer',
//       lastviewed: '2020-07-12',
//     },
//   ];
//   return (
//     <DataTable
//       rows={rows}
//       headers={headers}
//       isSortable
//       onSelect={({ selectedRows }) => setSelectedRows(selectedRows)}
//       selectedRows={selectedRows}
//     >
//       {({ rows, headers, getTableProps, getHeaderProps, getRowProps, getSelectionProps }) => (
//         <Table {...getTableProps()}>
//           <TableHead>
//             <TableRow>
//             <TableSelectAll {...getSelectionProps()}></TableSelectAll> 
//               {headers.map((header) => (
//                 <TableHeader {...getHeaderProps({ header })}>
//                   {header.header}
//                 </TableHeader>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row, rowIndex) => (
//               <TableRow {...getRowProps({ row })} key={row.id}>
//                 {/* <TableSelectRow
//                   {...getRowProps({ row })}
//                   id={row.id}
//                   isSelected={selectedRows.includes(row.id)}
//                 /> */} 
//                 <TableSelectRow {...getSelectionProps({row})}></TableSelectRow>
//                 {row.cells.map((cell, cellIndex) => (
//                   <TableCell key={cell.id}>{cell.value}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       )}
//     </DataTable>
//   );
// }
// export default ConsumerPage;