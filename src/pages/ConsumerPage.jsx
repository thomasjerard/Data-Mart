import React from 'react'
import '../App.scss';
import imgBoy from '../images/boypic.png'
import imgGirl from '../images/girlpic.png'
import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
  } from '@carbon/react';
  import {Button} from '@carbon/react'
  import Navbar from '../components/Navbar'
  import '../styles/ConsumerPage.scss'



function ConsumerPage(){
    return(
    <div>
      <Navbar/>
      <div className="consumerPage">
      <div className='content'>
        <h1>Consumers Page</h1>
        <Button>Add Consumers</Button>
      </div>
    <Table aria-label="sample table">
      <TableHead>
      <TableRow>
      <TableHeader>
          Profile
      </TableHeader>        
      <TableHeader>
          UserName
      </TableHeader>
        <TableHeader>
          stage
        </TableHeader>
        <TableHeader>
          Last Viewed
        </TableHeader>
        <TableHeader>
          Deletion
        </TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
            <img src={imgBoy}/>
        </TableCell>
        <TableCell>
            Thomas123
        </TableCell>
        <TableCell>
          consumer
        </TableCell>
        <TableCell>
          5 min ago
        </TableCell>
        <TableCell>
          <Button> Delete</Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
            <img src={imgGirl}/>
        </TableCell>
        <TableCell>
            vaidehi456
        </TableCell>
        <TableCell>
          consumer
        </TableCell>
        <TableCell>
          Active
        </TableCell>
        <TableCell>
        <Button> Delete</Button>
          
        </TableCell>
      
      </TableRow>
      <TableRow>
        <TableCell>
            <img src={imgGirl}/>
        </TableCell>
        <TableCell>
            Bhavya789
        </TableCell>
        <TableCell>
          Consumer
        </TableCell>
        <TableCell>
          2 min ago
        </TableCell>
        <TableCell>
        <Button> Delete</Button>
        </TableCell>
      
      </TableRow>
      <TableRow>
        <TableCell>
            <img src={imgGirl}/>
          </TableCell>
        <TableCell>
            Dimpul999
        </TableCell>
        <TableCell>
          Consumer
        </TableCell>
        <TableCell>
          10 min ago
        </TableCell>
        <TableCell>
        <Button> Delete</Button>
        </TableCell>
      
      </TableRow>
      <TableRow>
        <TableCell>
            <img src={imgBoy}/>
          </TableCell>
          <TableCell>
            <span>Mahidhar111</span>
        </TableCell>
        <TableCell>
          Consumer
        </TableCell>
        <TableCell>
          1 min ago
        </TableCell>
        <TableCell>
        <Button> Delete</Button>
        </TableCell>
      
      </TableRow>
      <TableRow>
        <TableCell>
          <img src={imgGirl}/>
        </TableCell>
        <TableCell>
          <span>sandra55</span>
        </TableCell>
        <TableCell>
          Consumer
        </TableCell>
        <TableCell>
          15 min ago
        </TableCell>
        <TableCell>
        <Button> Delete</Button>
        </TableCell>        
      </TableRow>
    </TableBody>
  </Table>
  </div>
</div>
    )

}
export default ConsumerPage