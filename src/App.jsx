import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CardDemo from "./Components/CardDemo";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const cardTitle="Lab Investigation";
function NestedTable() {
  return (
    <>
      <TableContainer component={Paper} sx={{ border: "1px solid black" }}>
        <Table sx={{ width: "100%" }}>
          <TableBody>
            <TableRow>
              <TableCell>
              </TableCell>
              <TableCell>
                    <CardDemo cardTitle={cardTitle}/>
              </TableCell>
              <TableCell>
                    <CardDemo cardTitle={cardTitle}/>
              </TableCell>
              <TableCell>
                <TableContainer
                  component={Paper}
                  sx={{ border: "1px solid black" }}
                >
                  <Table>
                    <TableHead>
                      <TableRow>
                        <Stack   direction="row" sx={{display:"flex" ,alignItems:"center" ,justifyContent:"center"}}> 
                          <Item sx={{borderRight:"1px solid black" , borderRadius:"0"}}>Drugs</Item>
                          <Item sx={{borderRight:"1px solid black" , borderRadius:"0"}}>Consumables/Implants</Item>
                        </Stack>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                        <Table sx={{border:"1px solid black"}}>
                    <TableHead>
                      <TableRow>
                        <Stack direction="row" >
                          <Item sx={{ borderBottom: "1px solid black",borderRight: "1px solid black" , borderRadius:"0"}}> SNO</Item>
                          <Item sx={{ borderBottom: "1px solid black",borderRight: "1px solid black" , borderRadius:"0"}}> Name</Item>
                          <Item sx={{ borderBottom: "1px solid black",borderRight: "1px solid black" , borderRadius:"0"}}> UnitPrice</Item>
                        </Stack>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Nested Table Cell 2</TableCell>
                      </TableRow>
                      {/* Add more rows as needed */}
                    </TableBody>
                  </Table>
                        </TableCell>
                        <TableCell>
                        <Table sx={{border:"1px solid black"}}>
                    <TableHead>
                      <TableRow>
                        <Stack direction="row" >
                        <Item sx={{ borderBottom: "1px solid black",borderRight: "1px solid black"}}> SNO</Item>
                          <Item sx={{ borderBottom: "1px solid black",borderRight: "1px solid black"}}> Name</Item>
                          <Item sx={{ borderBottom: "1px solid black",borderRight: "1px solid black"}}> UnitPrice</Item>
                        </Stack>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Nested Table Cell 2</TableCell>
                      </TableRow>
                      {/* Add more rows as needed */}
                    </TableBody>
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
    </>
  );
}

export default NestedTable;
