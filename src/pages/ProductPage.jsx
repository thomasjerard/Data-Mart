import React from 'react'
import '../styles/ProductPage.scss'
import { TableHeader, TableRow, TableHead, TableBody, TableCell , Table} from '@carbon/react'
import Navbar from '../components/Navbar'
import prodImg from '../images/product.jpg'
import { redirect } from 'react-router-dom'
import CopyButton from '@carbon/react/lib/components/CopyButton'

function Product() {

  const product = {
    productName: "Factori Raw Location Data | Global mobile location data (1 year history)",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis erat at turpis rhoncus, at ultrices turpis feugiat. In eu aliquam nunc. Integer venenatis purus at elit tincidunt, non congue.",
    DataList: [
      {
        DataName:"Data 1",
        DataDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        creationDate: "19/11/2003",
        UpdationDate:"20/4/2023",
        link:"https://www.google.co.in/"
      },
      {
        DataName:"Data 2",
        DataDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        creationDate: "19/11/2003",
        UpdationDate:"20/4/2023",
        link:"https://www.google.co.in/"
      },
      {
        DataName:"Data 3",
        DataDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        creationDate: "19/11/2003",
        UpdationDate:"20/4/2023",
        link:"https://www.google.co.in/"
      },{
        DataName:"Data 4",
        DataDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        creationDate: "19/11/2003",
        UpdationDate:"20/4/2023",
        link:"https://www.google.co.in/"
      }
    ]
  } 

  const handleClick = (e) => {
    window.open("https://www.google.co.in/","_blank");
  }

  const handleCopy = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <Navbar/>
      <div id="productPage">
        <div className="heading">
          <img src={prodImg} alt="prod" height="140px" />
          <div className='heading-content'>
            <h2>{product.productName}</h2>
            <p>By produce name</p>
          </div>
        </div>
        <h4>Description</h4>
        <p>{product.productDescription}</p>
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
              product.DataList.map(Data => (
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
                    {/* <CopyButton onClick={handleCopy} /> */}
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