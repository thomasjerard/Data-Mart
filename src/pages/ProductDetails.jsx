import React, { useState, useEffect } from 'react';
import prodImg from '../images/product.jpg'
import {
    DataTable, TableContainer, TableToolbar, TableBatchActions, TableBatchAction, Table, TableHead, TableRow,
    TableHeader, TableBody, TableCell, TableSelectAll, TableSelectRow, TableToolbarContent, TableToolbarSearch
} from '@carbon/react';
import { TrashCan, Edit, Add, AddLarge } from '@carbon/icons-react';
import Button from '@carbon/react/lib/components/Button';
import EditFormProduct from '../components/FormProduct';
import { useDispatch, useSelector } from "react-redux";
import { setproduct, product, remproduct } from '../global/SelectProductSlice'
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ProductPage.scss'
import DeleteIcon from '../images/Deleteicon.png'
import { useCookies } from 'react-cookie';
import axios from 'axios';

function ProductDetails({ category }) {

    const { productId } = useParams();
    const selproduct = useSelector(product);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookies, setcookies] = useCookies(['userRole', 'username']);

    const fetchProductDetail = async (productId) => {
        try {
            const response = await axios.get(`http://localhost:9090/dpx/data_products/${productId}/datalist`, {
                headers: {
                    Username: cookies.username
                }
            });
            // console.log("response data", response.data);
            dispatch(setproduct(response.data));
            // console.log("products", products);
        } catch (error) {
            alert("Error: ", error);
        }
    };

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetail(productId);
        }
        // return () => {
        //     dispatch(remproduct());
        // };
    }, [productId]);


    const [selectedRows, setSelectedRows] = useState([]);
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [rows, setRows] = useState(selproduct.dataLists);


    useEffect(() => {
        if (!cookies.userRole) {
            navigate('/signin');
        }
        fetchProductDetail(productId);
    }, [])

    const handleEdit = (rowId) => {
        const selectedRow = rows.find((row) => row.id === rowId);
        if (selectedRow) {
            setSelectedRowData(selectedRow);
            setIsEditFormOpen(true);
        }
    };

    const handleCloseEditForm = () => {
        setSelectedRowData(null);
        setIsEditFormOpen(false);
        setIsAddFormOpen(false);
    };

    const handleOpenAddForm = () => {
        setIsEditFormOpen(true);
        setIsAddFormOpen(true);
    };

    const headers1 = [
        {
            key: 'urlName',
            header: 'Name',
        },
        {
            key: 'urlDescription',
            header: 'Description',
        },
        {
            key: 'creationDate',
            header: 'Creation Date',
        },
        {
            key: 'lastUpdateDate',
            header: 'Last Updated Date',
        },
        {
            key: 'copyUrl',
            header: 'Copy URL',
        },
        {
            key: 'edit',
            header: 'Edit',
        },
    ];
    const headers2 = [
        {
            key: 'urlName',
            header: 'Name',
        },
        {
            key: 'urlDescription',
            header: 'Description',
        },
        {
            key: 'creationDate',
            header: 'Creation Date',
        },
        {
            key: 'lastUpdateDate',
            header: 'Last Updated Date',
        },
        {
            key: 'copyUrl',
            header: 'Copy URL',
        },
    ]

    // const handleSearchChange = (e) => {
    //     setSearchValue(e.target.value);
    // };

    // const filteredRows = rows.filter((row) =>
    //     row.urlName.toLowerCase().includes(searchValue.toLowerCase())
    // );

    useEffect(() => {
        // fetchProductDetail();
        dispatch(setproduct({ ...selproduct, DataList: rows }));
    }, [rows]);

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

    const [selectAllChecked, setSelectAllChecked] = useState(false);

    const handleSelectAll = () => {
        const newSelectedRows = selectAllChecked ? [] : [...rows];
        setSelectedRows(newSelectedRows);
        setSelectAllChecked(!selectAllChecked);
    };

    const handleBatchActionClick = () => {
        console.log('Batch action clicked:', selectedRows);
        setRows(rows.filter(row => !((selectedRows.map(r => r.id)).includes(row.id))));
        setSelectedRows(selectedRows.map(row => ({ ...row, isSelected: false })));
        setSelectedRows([]);
    };

    const handleEditProduct = (formData) => {
        if (selectedRowData) {
            setRows((prevRows) =>
                prevRows.map((row) => (row.id === selectedRowData.id ? { ...row, ...formData } : row))
            );
            setSelectedRowData(null);
        } else {
            console.log(formData);
            const newProduct = {
                id: Date.now().toString(),
                ...formData,
            };
            setRows((prevRows) => [...prevRows, newProduct]);
        }
        handleCloseEditForm();
    };

    const handlePublish = () => {
        console.log("publish");
    }

    return (
        <div id="productPage">
            <div className="heading">
                <img src={prodImg} alt="prod" height="140px" />
                <div className='heading-content'>
                    <h2>{selproduct.name}</h2>
                    <p>By {selproduct.producer}</p>
                </div>
            </div>
            <DataTable
                rows={rows}
                headers={category === "drafted" ? headers1 : headers2}
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
                    <TableContainer title="Description" description={selproduct.description}>
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
                                {category == "drafted" &&
                                    <>
                                        <Button
                                            hasIconOnly
                                            iconDescription="Icon Description"
                                            kind='ghost'
                                            renderIcon={AddLarge}
                                            onClick={handleOpenAddForm}
                                        />
                                        <Button className='purple' onClick={handlePublish}>Publish</Button>
                                    </>
                                }
                                {category == "published" && <Button className='purple' onClick={() => navigate("consumer")}>Add Consumer</Button>}
                            </TableToolbarContent>
                        </TableToolbar>
                        <Table {...getTableProps()}>
                            <TableHead>
                                <TableRow>
                                    {category === "drafted" && <TableSelectAll {...getSelectionProps()} onChange={handleSelectAll} />}
                                    {headers.map((header) => (
                                        <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, rowIndex) => (
                                    <TableRow {...getRowProps({ row })} key={row.id}>
                                        {category === "drafted" && <TableSelectRow {...getSelectionProps({ row })} onChange={() => handleRowSelect(row)} />}
                                        {row.cells.map((cell, cellIndex) => (
                                            <TableCell key={cell.id}>
                                                {category == "drafted" && cellIndex === headers.length - 1 ? (
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
                    </TableContainer>
                )
                }
            </DataTable>
            <br />
            <EditFormProduct
                isOpen={isEditFormOpen}
                isAdd={isAddFormOpen}
                handleClose={handleCloseEditForm}
                handleEditProduct={handleEditProduct}
                rowData={selectedRowData}
            />
            {category !== "" && (
                <div className='delete-icon'>
                    <img src={DeleteIcon} alt="Delete icon" />
                </div>
            )}
        </div>
    );
}

export default ProductDetails;