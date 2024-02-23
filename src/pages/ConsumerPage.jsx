import '../styles/ConsumerPage.scss';
import React, { useState } from 'react';
import '../App.scss';
import { DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TableSelectRow, TableSelectAll } from '@carbon/react';
import Button from '@carbon/react/lib/components/Button';
import { Edit } from '@carbon/icons-react';
import Navbar from '../components/Navbar';
import boypic from '../images/boypic.png';
import girlpic from '../images/girlpic.png';
import EditForm from '../components/EditForm';
import AddForm from '../components/AddForm';

function ConsumerPage() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const handleOpenAddForm = () => {
    setIsAddFormOpen(true);
  };

  const handleCloseAddForm = () => {
    setIsAddFormOpen(false);
  };

  const headers = [
    {
      key: 'profile',
      header: 'Profile',
    },
    {
      key: 'username',
      header: 'UserName',
    },
    {
      key: 'stage',
      header: 'Stage',
    },
    {
      key: 'lastviewed',
      header: 'Last Viewed',
    },
  ];

  const initialRows = [
    {
      id: 'a',
      profile: <img src={boypic} alt="pic" />,
      username: 'Thomas123',
      stage: 'Consumer',
      lastviewed: '02/29/2024',
    },
    {
      id: 'b',
      profile: <img src={girlpic} alt="pic" />,
      username: 'vaidehi456',
      stage: 'Consumer',
      lastviewed: '02/29/2024',
    },
  ];

  const [rows, setRows] = useState([...initialRows]);

  const handleAddConsumer = (formData) => {
    const newConsumer = {
      id: Date.now().toString(),
      profile: <img src={boypic} alt="pic" />,
      ...formData,
    };
    setRows((prevRows) => [...prevRows, newConsumer]);
  };

  return (
      <div className="consumerPage">
        <div className="content">
          <h1>Consumers Page</h1>
          <Button className='purple' onClick={handleOpenAddForm}>Add Consumer</Button>
          <AddForm
            handleAddConsumer={handleAddConsumer}
            isOpen={isAddFormOpen}
            handleClose={handleCloseAddForm}
          />
        </div>
        <DataTable
          rows={rows}
          headers={headers}
          isSortable
          onSelect={({ selectedRows }) => setSelectedRows(selectedRows)}
          selectedRows={selectedRows}
        >
          {({ rows, headers, getTableProps, getHeaderProps, getRowProps, getSelectionProps }) => (
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow className='head'>
                  <TableSelectAll {...getSelectionProps()}></TableSelectAll>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, rowIndex) => (
                  <TableRow {...getRowProps({ row })} key={row.id}>
                    <TableSelectRow {...getSelectionProps({ row })}></TableSelectRow>
                    {row.cells.map((cell, cellIndex) => (
                      <TableCell key={cell.id}>
                        {cell.value}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </DataTable>
        <br />
      </div>
  );
}

export default ConsumerPage;
