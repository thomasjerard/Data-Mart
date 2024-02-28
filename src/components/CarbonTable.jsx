// import React, { useState } from 'react';
// import {
//   DataTable,
//   TableContainer,
//   TableToolbar,
//   TableBatchActions,
//   TableBatchAction,
//   Table,
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableBody,
//   TableCell,
//   TableSelectAll,
//   TableSelectRow,
// } from '@carbon/react';
// import { TrashCan } from '@carbon/icons-react';

// const CarbonTable = () => {
//   const [selectedRows, setSelectedRows] = useState([]);

//   const rows = [
//     {
//       id: 'a',
//       name: 'Data 1',
//       description: 'Google',
//       creationdate: '2022/01/01',
//       lastupdateddate: '2022/01/05',
//       copyurl: 'www.google.com',
//     },
//     {
//       id: 'b',
//       name: 'Data 2',
//       description: 'IBM',
//       creationdate: '2022/01/02',
//       lastupdateddate: '2022/01/06',
//       copyurl: 'www.ibm.com',
//     },
//     {
//       id: 'c',
//       name: 'Data 3',
//       description: 'Google',
//       creationdate: '2022/01/01',
//       lastupdateddate: '2022/01/05',
//       copyurl: 'www.google.com',
//     },
//     {
//       id: 'd',
//       name: 'Data 4',
//       description: 'IBM',
//       creationdate: '2022/01/02',
//       lastupdateddate: '2022/01/06',
//       copyurl: 'www.ibm.com',
//     },
//     {
//       id: 'e',
//       name: 'Data 5',
//       description: 'Google',
//       creationdate: '2022/01/01',
//       lastupdateddate: '2022/01/05',
//       copyurl: 'www.google.com',
//     },
//     {
//       id: 'f',
//       name: 'Data 6',
//       description: 'IBM',
//       creationdate: '2022/01/02',
//       lastupdateddate: '2022/01/06',
//       copyurl: 'www.ibm.com',
//     },
//   ];

//   const headers = [
//     {
//       key: 'name',
//       header: 'Name',
//     },
//     {
//       key: 'description',
//       header: 'Description',
//     },
//     {
//       key: 'creationdate',
//       header: 'Creation Date',
//     },
//     {
//       key: 'lastupdateddate',
//       header: 'Last Updated Date',
//     },
//     {
//       key: 'copyurl',
//       header: 'Copy URL',
//     },
//     {
//       key: 'edit',
//       header: 'Edit',
//     },
//   ];

//   const handleRowSelect = (row) => {
//     const index = selectedRows.findIndex((r) => r.id === row.id);
//     if (index === -1) {
//       setSelectedRows([...selectedRows, row]);
//     } else {
//       setSelectedRows(selectedRows.filter((r) => r.id !== row.id));
//     }
//   };

//   const handleBatchActionClick = () => {
//     // Perform batch action on selectedRows
//     console.log('Batch action clicked:', selectedRows);
//     setSelectedRows([]); // Clear selected rows after action
//   };

//   return (
//     <DataTable rows={rows} headers={headers}>
//       {({
//         rows,
//         headers,
//         getHeaderProps,
//         getSelectionProps,
//         getBatchActionProps,
//         getToolbarProps,
//         getRowProps,
//       }) => (
//         <TableContainer title="DataTable">
//           <TableToolbar {...getToolbarProps()}>
//             <TableBatchActions {...getBatchActionProps()}>
//               <TableBatchAction
//                 onClick={handleBatchActionClick}
//                 tabIndex={0}
//                 renderIcon={TrashCan}
//               >
//                 Delete
//               </TableBatchAction>
//             </TableBatchActions>
//           </TableToolbar>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableSelectAll {...getSelectionProps()} />
//                 {headers.map((header) => (
//                   <TableHeader {...getHeaderProps({ header })}>
//                     {header.header}
//                   </TableHeader>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow {...getRowProps({ row })} key={row.id}>
//                   <TableSelectRow
//                     {...getSelectionProps({ row })}
//                     onChange={() => handleRowSelect(row)}
//                   />
//                   {row.cells.map((cell) => (
//                     <TableCell key={cell.id}>{cell.value}</TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </DataTable>
//   );
// };

// export default CarbonTable;


// import React, { useState } from 'react';
// import {
//   DataTable,
//   TableContainer,
//   TableToolbar,
//   TableBatchActions,
//   TableBatchAction,
//   Table,
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableBody,
//   TableCell,
//   TableSelectAll,
//   TableSelectRow,
//   TableToolbarSearch,
//   Button,
//   TableToolbarContent,
// } from '@carbon/react';
// import { TrashCan } from '@carbon/icons-react';

// const CarbonTable = () => {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [searchValue, setSearchValue] = useState('');
//   const [selectAllChecked, setSelectAllChecked] = useState(false);

//   const rows = [
//     { id: 'a', name: 'Row 1', description: 'Description 1' },
//     { id: 'b', name: 'Row 2', description: 'Description 2' },
//     { id: 'c', name: 'Row 3', description: 'Description 3' },
//   ];

//   const headers = [
//     { key: 'name', header: 'Name' },
//     { key: 'description', header: 'Description' },
//   ];

//   const handleRowSelect = (row) => {
//     const index = selectedRows.findIndex((r) => r.id === row.id);
//     if (index === -1) {
//       setSelectedRows([...selectedRows, row]);
//     } else {
//       setSelectedRows(selectedRows.filter((r) => r.id !== row.id));
//     }
//   };

//   const handleSelectAll = () => {
//     if (!selectAllChecked) {
//       setSelectedRows([...rows]);
//     } else {
//       setSelectedRows([]);
//     }
//     setSelectAllChecked(!selectAllChecked);
//   };

//   const handleBatchActionClick = () => {
//     // Perform batch action on selectedRows
//     console.log('Batch action clicked:', selectedRows);
//     setSelectedRows([]); // Clear selected rows after action
//     setSelectAllChecked(false); // Uncheck select all
//   };

//   const handleButtonClick = () => {
//     // Handle button click action
//     console.log('Button clicked');
//   };

//   const handleSearchChange = (e) => {
//     setSearchValue(e.target.value);
//   };

//   const filteredRows = rows.filter((row) =>
//     row.name.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   return (
//     <DataTable rows={filteredRows} headers={headers}>
//       {({
//         rows,
//         headers,
//         getHeaderProps,
//         getSelectionProps,
//         getBatchActionProps,
//         getToolbarProps,
//         getRowProps,
//       }) => (
//         <TableContainer title="DataTable">
//           <TableToolbar {...getToolbarProps()}>
//             <TableBatchActions {...getBatchActionProps()}>
//               <TableBatchAction
//                 onClick={handleBatchActionClick}
//                 tabIndex={0}
//                 renderIcon={TrashCan}
//               >
//                 Delete
//               </TableBatchAction>
//             </TableBatchActions>
//             <TableToolbarContent>
//               <TableToolbarSearch onChange={handleSearchChange} />
//               <Button onClick={handleButtonClick}>Custom Button</Button>
//             </TableToolbarContent>
//           </TableToolbar>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableSelectAll
//                   {...getSelectionProps()}
//                   checked={selectAllChecked}
//                   onChange={handleSelectAll}
//                 />
//                 {headers.map((header) => (
//                   <TableHeader {...getHeaderProps({ header })}>
//                     {header.header}
//                   </TableHeader>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow {...getRowProps({ row })} key={row.id}>
//                   <TableSelectRow
//                     {...getSelectionProps({ row })}
//                     onChange={() => handleRowSelect(row)}
//                   />
//                   {row.cells.map((cell) => (
//                     <TableCell key={cell.id}>{cell.value}</TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </DataTable>
//   );
// };

// export default CarbonTable;

// import React from 'react';
// import { ToastNotification } from '@carbon/icons-react';

// const YourComponent = () => {
//   const alertProps = {
//     title: 'Element Deleted',
//     subtitle: 'The element has been successfully deleted.',
//     caption: 'This is additional information about the deletion.',
//     kind: 'success', // Specify the kind of alert (success, error, warning, info)
//     onCloseButtonClick: () => console.log('Close button clicked'), // Optional callback for when the close button is clicked
//   };

//   return (
//     <div>
//       <ToastNotification {...alertProps} />
//     </div>
//   );
// };

// export default YourComponent;
