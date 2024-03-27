import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function NestedTable() {
  return (
    <TableContainer component={Paper} sx={{border:"1px solid black"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{border:"1px solid black"}}>Patient Service Phase</TableCell>
            <TableCell sx={{textAlign:"center"}} style={{border:"1px solid black"}}>Lab Investigations</TableCell>
            <TableCell sx={{textAlign:"center"}} style={{border:"1px solid black"}}>Imageology</TableCell>
            <TableCell sx={{textAlign:"center"}} style={{border:"1px solid black"}}>Pharmacy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
            <TableContainer component={Paper} >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{border:"1px solid black"}}></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{border:"1px solid black"}}>Pre-OP</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{border:"1px solid black"}}>OT</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{border:"1px solid black"}}>Post-OP</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{border:"1px solid black"}}>Post Treatment Evidence</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </TableCell>
            <TableCell >
              <TableContainer component={Paper} sx={{border:"1px solid black"}}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{border:"1px solid black"}}>SNO</TableCell>
                      <TableCell style={{border:"1px solid black"}}>Name</TableCell>
                      <TableCell style={{border:"1px solid black"}}>Unit Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Nested Table Cell 2</TableCell>
                    </TableRow>
                    {/* Add more rows as needed */}
                  </TableBody>
                </Table>
              </TableContainer>
            </TableCell>
            <TableCell>
              <TableContainer component={Paper} sx={{border:"1px solid black"}}> 
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{border:"1px solid black"}}>SNO</TableCell>
                      <TableCell style={{border:"1px solid black"}}>Name</TableCell>
                      <TableCell style={{border:"1px solid black"}}>Unit Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Nested Table Cell 2</TableCell>
                    </TableRow>
                    {/* Add more rows as needed */}
                  </TableBody>
                </Table>
              </TableContainer>
            </TableCell>
            <TableCell >
            <TableContainer component={Paper} sx={{border:"1px solid black"}}>
                <Table >
                  <TableHead>
                    <TableRow>
                      <TableCell  style={{border:"1px solid black"}} sx={{textAlign:"center"}}>Drugs</TableCell>
                      <TableCell style={{border:"1px solid black"}} sx={{textAlign:"center"}}>Consumables/Implants</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody >
                    <TableRow >
                      <TableCell >
                        <Table sx={{border:"1px solid black"}}>
                          <TableHead>
                            <TableRow >
                              <TableCell style={{border:"1px solid black"}}>SNO</TableCell>
                              <TableCell style={{border:"1px solid black"}}>Name</TableCell>
                              <TableCell style={{border:"1px solid black"}}>Quantity</TableCell>
                              <TableCell style={{border:"1px solid black"}} >Unit Price</TableCell>
                            </TableRow>
                          </TableHead>
                        </Table>
                      </TableCell>
                      <TableCell>
                        <Table sx={{border:"1px solid black"}}>
                          <TableHead>
                            <TableRow>
                              <TableCell style={{border:"1px solid black"}}>SNO</TableCell>
                              <TableCell style={{border:"1px solid black"}}>Name</TableCell>
                              <TableCell style={{border:"1px solid black"}}>Route</TableCell>
                              <TableCell style={{border:"1px solid black"}}>Strength</TableCell>
                              <TableCell style={{border:"1px solid black"}}>Dosage</TableCell>
                              <TableCell style={{border:"1px solid black"}}>Days</TableCell>
                              <TableCell style={{border:"1px solid black"}}>Unit Price</TableCell>
                            </TableRow>
                          </TableHead>
                        </Table>
                      </TableCell>
                    </TableRow>
                    {/* Add more rows as needed */}
                  </TableBody>
                </Table>
              </TableContainer>
              </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default NestedTable;
