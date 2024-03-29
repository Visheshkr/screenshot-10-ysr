import { Box, Card, CardContent, CardHeader, Grid, TextField, Typography } from "@mui/material"
const CardDemo = ({cardTitle}) => {
  const arr=[1,2,3,4];
  const demoText = "Demo Text";
  const boxText="Post treatment evidence";
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Card sx={{width:"400px",border:"1px solid black"}}>
      <CardHeader title={cardTitle} sx={{textAlign:"center"}}/>
      <CardContent>
        <Grid container sx={{display:"flex",justifyContent:"space-between"}}>
        <Typography >{demoText}</Typography>
        <Typography >SNO</Typography>
        <Typography >Name</Typography>
        <Typography >Unit Price</Typography>
        </Grid>
        {arr.map((itemNo)=>(
        <Grid item sx={{display:"flex",justifyContent:"space-between"}} key={itemNo}>
          <Box  sx={{border:"1px solid gray",fontSize:"10px",height:"45px",mt:"5px",borderRadius:"8%",textAlign:"center"}}>{boxText}</Box>
          <TextField inputProps={{style: {fontSize: "10px"}}} sx={{width:"160px",m:"4px"}}/>
          <TextField inputProps={{style: {fontSize: "10px"}}} sx={{width:"160px",m:"4px"}}/>
          <TextField inputProps={{style: {fontSize: "10px"}}} sx={{width:"160px",m:"4px"}}/>
        </Grid>
        ))}
      </CardContent>
    </Card>
    </div>
  )
}

export default CardDemo