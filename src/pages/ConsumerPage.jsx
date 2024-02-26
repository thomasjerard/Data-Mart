import '../styles/ConsumerPage.scss';
import React, { useState, useEffect } from 'react';
import '../App.scss';
import {
  DataTable, TableContainer, TableToolbar, TableBatchActions, TableBatchAction, Table, TableHead, TableRow,
  TableHeader, TableBody, TableCell, TableSelectAll, TableSelectRow, TableToolbarContent, TableToolbarSearch
} from '@carbon/react';
import { TrashCan, Edit, AddLarge } from '@carbon/icons-react';
import Button from '@carbon/react/lib/components/Button';
import boypic from '../images/boypic.png';
import girlpic from '../images/girlpic.png';
import AddForm from '../components/AddForm';
import { useDispatch, useSelector } from "react-redux";
import { setconsumers, consumers, remconsumers } from '../global/ConsumersSlice'

function ConsumerPage() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleOpenAddForm = () => {
    setIsAddFormOpen(true);
  };

  const handleCloseAddForm = () => {
    setIsAddFormOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleRowSelect = (row) => {
    console.log(row);
    const index = selectedRows.findIndex((r) => r.id === row.id);
    console.log(index);
    if (index === -1) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(selectedRows.filter((r) => r.id !== row.id));
    }
  };

  const handleBatchActionClick = () => {
    console.log('Batch action clicked:', selectedRows);
    setRows(rows.filter(row => !((selectedRows.map(r => r.id)).includes(row.id))));
    setSelectedRows(selectedRows.map(row => ({ ...row, isSelected: false })));
    setSelectedRows([]);
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

  const initialRows = useSelector(consumers);

  const [rows, setRows] = useState([...initialRows]);
  const filteredRows = rows.filter((row) =>
    row.username.toLowerCase().includes(searchValue.toLowerCase())
  );
  const handleAddConsumer = (formData) => {
    const newConsumer = {
      id: Date.now().toString(),
      profile: <img src={boypic} alt="pic" />,
      ...formData,
    };
    setRows((prevRows) => [...prevRows, newConsumer]);
  };

  useEffect(() => {
    // fetchProducts();
    dispatch(setconsumers(rows));
  }, [rows, dispatch]);

  return (
    <div className="consumerPage">
      <div className="content">
        <h1>Consumers Management</h1>
        <Button className='purple' onClick={handleOpenAddForm}>Add Consumer</Button>
        <AddForm
          handleAddConsumer={handleAddConsumer}
          isOpen={isAddFormOpen}
          handleClose={handleCloseAddForm}
        />
      </div>
      <DataTable
        rows={filteredRows}
        headers={headers}
        isSortable
        onSelect={({ selectedRows }) => setSelectedRows(selectedRows)}
        selectedRows={selectedRows}
      >
        {({ rows,
          headers,
          getTableProps,
          getHeaderProps,
          getSelectionProps,
          getBatchActionProps,
          getToolbarProps,
          getRowProps,
          selectRow

        }) =>
        (
          <TableContainer>
            <TableToolbar {...getToolbarProps()}>
              <TableBatchActions {...getBatchActionProps()}>
                <TableBatchAction
                  onClick={handleBatchActionClick}
                  tabIndex={0}
                  renderIcon={TrashCan}
                >
                  Delete
                </TableBatchAction>
              </TableBatchActions>
              <TableToolbarContent>
                <TableToolbarSearch onChange={handleSearchChange} />
                <Button
                  hasIconOnly
                  iconDescription="Icon Description"
                  kind='ghost'
                  renderIcon={AddLarge}
                  onClick={handleOpenAddForm}
                />
              </TableToolbarContent>
            </TableToolbar>
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
                    <TableSelectRow {...getSelectionProps({ row })} onChange={() => handleRowSelect(row)}></TableSelectRow>
                    {row.cells.map((cell, cellIndex) => (
                      <TableCell key={cell.id}>
                        {cell.value}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
      <br />
    </div>
  );
}

export default ConsumerPage;
