import React, { useState } from 'react';
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
import Button from '@carbon/react/lib/components/Button';
import Navbar from '../components/Navbar';
import EditFormProduct from '../components/EditFormProduct';
import AddFormProduct from '../components/AddFormProduct';
function DraftProduct() {
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
      key: 'name',
      header: 'Name',
    },
    {
      key: 'description',
      header: 'Description',
    },
    {
      key: 'creationdate',
      header: 'Creation Date',
    },
    {
      key: 'lastupdateddate',
      header: 'Last Updated Date',
    },
    {
      key: 'copyurl',
      header: 'Copy URL',
    },
    {
      key: 'edit',
      header: 'Edit',
    },
  ];
  const initialRows = [
    {
      id: 'a',
      name: 'Data 1',
      description: 'Google',
      creationdate: '2022-01-01',
      lastupdateddate: '2022-01-05',
      copyurl: 'www.google.com',
    },
    {
      id: 'b',
      name: 'Data 2',
      description: 'IBM',
      creationdate: '2022-01-02',
      lastupdateddate: '2022-01-06',
      copyurl: 'www.ibm.com',
    },
    {
      id: 'c',
      name: 'Data 3',
      description: 'Google',
      creationdate: '2022-01-01',
      lastupdateddate: '2022-01-05',
      copyurl: 'www.google.com',
    },
    {
      id: 'd',
      name: 'Data 4',
      description: 'IBM',
      creationdate: '2022-01-02',
      lastupdateddate: '2022-01-06',
      copyurl: 'www.ibm.com',
    },
    {
      id: 'e',
      name: 'Data 5',
      description: 'Google',
      creationdate: '2022-01-01',
      lastupdateddate: '2022-01-05',
      copyurl: 'www.google.com',
    },
    {
      id: 'f',
      name: 'Data 6',
      description: 'IBM',
      creationdate: '2022-01-02',
      lastupdateddate: '2022-01-06',
      copyurl: 'www.ibm.com',
    },
  ];
  const [products, setProducts] = useState(initialRows);
  const [rows, setRows] = useState(products);
  const handleAddProduct = (formData) => {
    const newProduct = {
      id: Date.now().toString(),
      ...formData,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setRows((prevRows) => [...prevRows, newProduct]);
  };
  const handleEditProduct = (formData) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === selectedRowData.id ? { ...product, ...formData } : product
      )
    );
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === selectedRowData.id ? { ...row, ...formData } : row))
    );
    handleCloseEditForm();
  };
  return (
    <div>
      <Navbar />
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
      <br />
      <Button onClick={handleOpenAddForm}>Add Product</Button>
      <EditFormProduct
        isOpen={isEditFormOpen}
        handleClose={handleCloseEditForm}
        handleEditProduct={handleEditProduct}
        rowData={selectedRowData}
      />
      <AddFormProduct handleAddProduct={handleAddProduct} isOpen={isAddFormOpen} handleClose={handleCloseAddForm} />
    </div>
  );
}
export default DraftProduct;
