import '../styles/ConsumerPage.scss'
import React, { useState } from 'react';
import '../App.scss';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableSelectRow,
  TableSelectAll,
} from '@carbon/react';
import { Edit } from '@carbon/icons-react';
import Button from '@carbon/react/lib/components/Button'


import Navbar from '../components/Navbar';
import boypic from '../images/boypic.png';
import girlpic from '../images/girlpic.png';
import EditForm from '../components/EditForm';
import AddForm from '../components/AddForm'; 

function ConsumerPage() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false); 

  const handleEdit = (rowId) => {
    const selectedRow = rows.find((row) => row.id === rowId);
    if (selectedRow) {
      setSelectedRowData(selectedRow);
      setIsEditFormOpen(true);
    }
  };

  const handleEditConsumer = (formData) => {
    setConsumers((prevConsumers) =>
      prevConsumers.map((consumer) =>
        consumer.id === selectedRowData.id ? { ...consumer, ...formData } : consumer
      )
    );
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === selectedRowData.id ? { ...row, ...formData } : row
      )
    );
    handleCloseEditForm();
  };


  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
    setSelectedRowData(null);
  };

  const handleOpenAddForm = () => {
    setIsAddFormOpen(true); 
  };

  const handleCloseAddForm = () => {
    setIsAddFormOpen(false); 
  };

  const headers = [
    {
      key: 'select',
      header: () => (
        <TableSelectAll
          onChange={(event) => setSelectedRows(event.target.checked ? rows.map((row) => row.id) : [])}
          checked={selectedRows.length === rows.length}
        />
      ),
    },
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
    {
      key: 'edit',
      header: 'Edit',
    },
  ];

  const initialRows = [
    {
      id: 'a',
      profile: <img src={boypic} alt="pic" />,
      username: 'Thomas123',
      stage: 'Consumer',
      lastviewed: '2020-02-23',
    },
    {
      id: 'b',
      profile: <img src={girlpic} alt="pic" />,
      username: 'vaidehi456',
      stage: 'Consumer',
      lastviewed: '2020-07-12',
    },
  ];

  const [consumers, setConsumers] = useState(initialRows);
  const [rows, setRows]=useState(consumers);

  const handleAddConsumer = (formData) => {
    const newConsumer = {
      id: Date.now().toString(), 
      profile: <img src={boypic} alt="pic" />, 
      ...formData,
    };

    setConsumers((prevConsumers) => [...prevConsumers, newConsumer]);
    setRows((prevRows)=>[...prevRows,newConsumer])

    console.log(consumers)

  };

  return (
    <div>
      <Navbar />
      <div className='consumerPage'>
      <div className='content'>
        <h1>Consumers Page</h1>
          <Button onClick={handleOpenAddForm}>Add Consumer</Button> 
          <EditForm isOpen={isEditFormOpen} handleClose={handleCloseEditForm} handleEditConsumer={handleEditConsumer} rowData={selectedRowData} />
          <AddForm handleAddConsumer={handleAddConsumer} isOpen={isAddFormOpen} handleClose={handleCloseAddForm} />
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
              <TableRow>
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
                      {cellIndex === headers.length - 1 ? (
                        <span className="edit" onClick={() => handleEdit(row.id)}>
                          <Edit />
                        </span>
                      ) : (
                        cell.value
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>

      <br/>
      <Button onClick={handleOpenAddForm}>Add Consumer</Button> 
      <EditForm isOpen={isEditFormOpen} handleClose={handleCloseEditForm} handleEditConsumer={handleEditConsumer} rowData={selectedRowData} />
      <AddForm handleAddConsumer={handleAddConsumer} isOpen={isAddFormOpen} handleClose={handleCloseAddForm} />
      </div>
    </div>
  );
}

export default ConsumerPage;