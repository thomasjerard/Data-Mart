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
import Button from '@carbon/react/lib/components/Button';

function PublishedProduct() {
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

  

  return (
      <div id="productPage">
        <div className="heading">
          <img src={prodImg} alt="prod" height="140px" />
          <div className="heading-content">
            <h2>{product.productName}</h2>
            <h5>By produce name</h5>
          </div>
        </div>
        <div className="action-bar">
        <Button className='purple' onClick={() => window.location.href="/consumer"}>Add Consumer</Button>
      </div>
        <h4>Description</h4>
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
            <Table  {...getTableProps()}>
              <TableHead >
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

export default PublishedProduct


