<<<<<<< HEAD
import React, {useEffect} from 'react'
import '../styles/ProductPage.scss'
import { TableHeader, TableRow, TableHead, TableBody, TableCell , Table} from '@carbon/react'
import Navbar from '../components/Navbar'
import prodImg from '../images/product.jpg'
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { setproduct, product, remproduct } from '../global/SelectProductSlice'
import axios from 'axios'

function Product() {

  const { productId } = useParams();
  const selproduct = useSelector(product); 

  const handleClick = (e) => {
    window.open("https://www.google.co.in/","_blank");
  }

  const dispatch = useDispatch();

  // const fetchProductDetail = async (id) => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${id}`)
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(setproduct(response.data));
  // };

  // useEffect(() => {
  //   if (productId && productId !== "") fetchProductDetail(productId);
  //   return () => {
  //     dispatch(remproduct());
  //   };
  // }, [productId]);
=======
import React from 'react';
import '../styles/ProductPage.scss';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableSelectRow,
  TableSelectAll,
} from '@carbon/react';
import Navbar from '../components/Navbar';
import prodImg from '../images/product.jpg';

function Product() {
  const product = {
    productName: "Factori Raw Location Data | Global mobile location data (1 year history)",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis erat at turpis rhoncus, at ultrices turpis feugiat. In eu aliquam nunc. Integer venenatis purus at elit tincidunt, non congue.",
    DataList: [
      {
        id:'a',
        DataName: "Data 1",
        DataDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        creationDate: "19/11/2003",
        UpdationDate: "20/4/2023",
        link: "https://www.google.co.in/",
      },
      {
        id:'b',
        DataName: "Data 2",
        DataDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        creationDate: "19/11/2003",
        UpdationDate: "20/4/2023",
        link: "https://www.google.co.in/",
      },
      {
        id:'c',
        DataName: "Data 3",
        DataDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        creationDate: "19/11/2003",
        UpdationDate: "20/4/2023",
        link: "https://www.google.co.in/",
      },
      {
        id:'d',
        DataName: "Data 4",
        DataDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        creationDate: "19/11/2003",
        UpdationDate: "20/4/2023",
        link: "https://www.google.co.in/",
      },
    ],
  };

  
>>>>>>> 01b9f6143d3399fa4cac89f7021248273672db4e

  return (
    <div>
      <Navbar />
      <div id="productPage">
        <div className="heading">
          <img src={prodImg} alt="prod" height="140px" />
<<<<<<< HEAD
          <div className='heading-content'>
            <h2>{selproduct.productName}</h2>
=======
          <div className="heading-content">
            <h2>{product.productName}</h2>
>>>>>>> 01b9f6143d3399fa4cac89f7021248273672db4e
            <p>By produce name</p>
          </div>
        </div>
        <h4>Description</h4>
<<<<<<< HEAD
        <p>{selproduct.productDescription}</p>
        <hr/>
        <Table aria-label="sample table">
          <TableHead>
            <TableRow>
              <TableHeader>
                Name
              </TableHeader>
              <TableHeader>
                Description
              </TableHeader>
              <TableHeader>
                Creation Date
              </TableHeader>
              <TableHeader>
                Last Updated
              </TableHeader>
              <TableHeader>
                Copy URL
              </TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              selproduct.DataList.map(Data => (
                <TableRow onClick={handleClick} id={Data.link} key={Data.name}>
                <TableCell>
                  {Data.DataName}
                </TableCell>
                <TableCell>
                  {Data.DataDescription}
                </TableCell>
                <TableCell>
                  {Data.creationDate}
                </TableCell>
                <TableCell>
                  {Data.UpdationDate}
                </TableCell>
                <TableCell>
                  <div className='link'>
                    <span>{Data.link}</span>
                  </div>
                </TableCell>
              </TableRow>
              ))
            }
          </TableBody>
        </Table>
=======
        <p>{product.productDescription}</p>
        <hr />
       <DataTable
          rows={product.DataList}
          headers={[
            { header: 'Name', key: 'DataName' },
            { header: 'Description', key: 'DataDescription' },
            { header: 'Creation Date', key: 'creationDate' },
            { header: 'Last Updated', key: 'UpdationDate' },
            { header: 'Copy URL', key: 'link' },
          ]}
          isSortable
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
                  <TableRow {...getRowProps({ row })} key={rowIndex}>
                    <TableSelectRow {...getSelectionProps({ row, id: rowIndex })}></TableSelectRow>
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
>>>>>>> 01b9f6143d3399fa4cac89f7021248273672db4e
      </div>
    </div>
  );
}

export default Product;
