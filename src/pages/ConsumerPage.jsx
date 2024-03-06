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
import AddForm from '../components/AddForm';
import { useDispatch, useSelector } from "react-redux";
import { setconsumers, consumers, remconsumers } from '../global/ConsumersSlice'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { productsSlice } from '../global/ProductsSlice';
import AddNewProduct from '../components/AddNewProduct';

function ConsumerPage() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();
  const [cookies, setcookies] = useCookies(['userRole']);

  const fetchProductUsers = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:9090/dpx/data_products/${productId}/userlist`, {
        headers: {
          Username: cookies.username
        }
      });
      const users = response.data.users.map(obj => ({
        id: obj.id,
        stage: obj.stage,
        username: obj.username,
        lastviewed: "01/03/24"
      }));
      console.log(response.data);
      setRows(users);
      // dispatch(users);
    } catch (error) {
      console.error("Error fetching product users:", error);
      // You might want to handle errors more gracefully, such as displaying an error message to the user
    }
  };

  // useEffect(() => {
  //   if (productId && productId !== "") {
  //     fetchProductUsers(productId);
  //   }
  //   return () => {
  //     dispatch(remconsumers());
  //   };
  // }, [productId]);

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductUsers(productId);
    }
    // return () => {
    //   dispatch(remconsumers());
    // };
  }, [productId]);

  // useEffect(() => {
  //   setRows([...initialRows]);
  // }, [dispatch]);

  useEffect(() => {
    console.log(cookies.userRole);
    if (!cookies.userRole) {
      navigate('/signin');
    }
  }, [])

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

  const deleteUserList = async (username) => {
    try {
      const response = await axios.delete(
        `http://localhost:9090/dpx/data_products/${productId}/userlist`,
        {
          headers: {
            'Content-Type': 'text/plain',
            'Username': cookies.username
          },
          data: username // Pass username as data payload
        }
      );
      alert('Element Deleted:');
      fetchProductUsers(productId);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleBatchActionClick = async () => {
    // console.log('Batch action clicked:', selectedRows[0].cells[0].value);

    for (const item of selectedRows) {
      try {
        await deleteUserList(item.cells[0].value);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }

    // Once all deletions are completed, update the selected rows state
    setSelectedRows([]);
  };


  const headers = [
    // {
    //   key: 'profile',
    //   header: 'Profile',
    // },
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

  // const filteredRows = rows.filter((row) =>
  //   row.username.toLowerCase().includes(searchValue.toLowerCase())
  // );

  const addNewUser = async (username) => {
    try {
      // Make a POST request to add the element
      const response = await axios.post(
        `http://localhost:9090/dpx/data_products/${productId}/userlist/`,
        username, // Pass username directly as the data payload
        {
          headers: {
            'Content-Type': 'text/plain', // Set content type to "text/plain"
            'Username': cookies.username
          }
        }
      );
      alert('Element added:', response.data);
      fetchProductUsers(productId);
      // Handle the response if needed
    } catch (error) {
      // Handle errors
      alert('Error adding element:', error);
    }
  };

  const handleAddConsumer = (formData) => {
    addNewUser(formData.username);
    // const newConsumer = {
    //   id: Date.now().toString(),
    //   ...formData,
    // };
    // console.log(newConsumer);
    // setRows((prevRows) => [...prevRows, newConsumer]);
  };

  useEffect(() => {
    // fetchProducts();
    dispatch(setconsumers(rows));
  }, [rows, dispatch]);

  return (
    <div className="consumerPage">
      <div className="content">
        <h1>Consumers Management</h1>
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
                {/* <TableToolbarSearch onChange={handleSearchChange} /> */}
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
                {rows.map((row) => (
                  <TableRow {...getRowProps({ row })} key={row.id}>
                    <TableSelectRow {...getSelectionProps({ row })} onChange={() => handleRowSelect(row)}></TableSelectRow>
                    {/* <TableCell><img src={boypic} /></TableCell> */}
                    {row.cells.map((cell) => (
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
