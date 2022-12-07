import React,{useContext,useState} from "react";
import { AuthContext } from "./Context/AuthContexProvider";
import { FormControl, FormGroup, Input, InputLabel, Typography,styled, Button } from "@mui/material"
import {useNavigate} from "react-router-dom";




const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto  0 auto;
    &> div {
        margin-top:20px
    }`
const Next = () => {
    const {count,toggle,setcount}=useContext(AuthContext)
  return (
  <Container>
      <Typography variant="h4">counter :- {count}</Typography>
  </Container>
  )
}

export default Next