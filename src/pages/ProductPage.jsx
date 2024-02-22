import React, {useEffect} from 'react'
import '../styles/ProductPage.scss'
import { DataTable, TableHeader, TableRow, TableHead, TableBody, TableCell , Table} from '@carbon/react'
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

  return (
      <div id="productPage">
        <div className="heading">
          <img src={prodImg} alt="prod" height="140px" />
          <div className='heading-content'>
            <h2>{selproduct.productName}</h2>
            <p>By produce name</p>
          </div>
        </div>
        <h4>Description</h4>
        <p>{product.productDescription}</p>
        <hr />
       <DataTable
          rows={selproduct.DataList}
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
                  {/* <TableSelectAll {...getSelectionProps()}></TableSelectAll> */}
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, rowIndex) => (
                  <TableRow {...getRowProps({ row })} key={rowIndex}>
                    {/* <TableSelectRow {...getSelectionProps({ row, id: rowIndex })}></TableSelectRow> */}
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
      </div>
  );
}

export default Product;
