import React from 'react'
import '../App.scss';
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
    <div class="table">
        <Table aria-label="sample table">
    <TableHead>
    <TableRow>
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
    )

}
export default ConsumerPage