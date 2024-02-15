import React from 'react'
import '../App.scss';
import img1 from './pic 1.png'
import img2 from './pic 2.png'
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



function ConsumerPage(){
    return(
        <div class="add">
            <Button> Add people </Button>

        
    <div class="table">
        <Table aria-label="sample table">
    <TableHead>
    <TableRow>
    <TableHeader>
      UserName
    </TableHeader>
      <TableHeader>
        Stage
        
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
      <TableCell class= "Name">
        
        <img class = "image" src ={img2} ></img>

        Thomas123
      </TableCell> 
      <TableCell>
        Consumer
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
      <img class = "image" src = {img1} ></img>
        Vaidehi456
      </TableCell>
      <TableCell>
        Consumer
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
      <img class = "image" src = {img1}></img>
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
      <img class = "image" src = {img1}></img>
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
      <img class = "image" src = {img2}></img>
        Mahidhar111
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
      <img class = "image" src = {img1}></img>
        sandra55

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