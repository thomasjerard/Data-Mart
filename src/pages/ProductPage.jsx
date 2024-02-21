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

  return (
    <div>
      <Navbar/>
      <div id="productPage">
        <div className="heading">
          <img src={prodImg} alt="prod" height="140px" />
          <div className='heading-content'>
            <h2>{selproduct.productName}</h2>
            <p>By produce name</p>
          </div>
        </div>
        <h4>Description</h4>
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
      </div>
    </div>
  )
}

export default Product