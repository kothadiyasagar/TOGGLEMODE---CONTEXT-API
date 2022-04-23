import React from "react";
import { Card,Img1 } from "./App.styled";
import  F from "../src/fille.svg"

const Dark =()=>{

    return(
      <>

        <Card>
            <Img1 style={{}} src="https://s3-alpha-sig.figma.com/img/ba0a/04be/3fe57490276bd6bbec4526bef0a99e9b?Expires=1651449600&Signature=DzAZ5QmhgU4Oe~ENXWBjPOCzz350CTzYxBRcwYwyhEJPZKYRRYpvSB4PvyEIJciDXvLrkqqD7vsQcRqNNabd~wIpSZd38TxmDmiPreTo88YuXDxpResebztt~yL8vrgMeyd7fWG~8724-FnqPXydOkQNV51com8D2NzXsIdVhgR16qZf2LreEh9xf76CNelE8gmRtMRtpYOzILpv9CXhzcRblwSdsOAYdKS~zqbT5hI5IZzpseyq9ZwXhQOBs8Ee34qETw9SapJY7HVx7AGeOLLYYctcOzcziREEFwVIl5EAFcqsmS81TtarxfQLD6CA5V4vv0uub024OI~MBcicNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">
            </Img1>
            <div style={{height: "70px",
width: "96px",
left: "0px",
position: "absolute",
marginTop: "150px",
borderRadius: "5px",
boxShadow: "0px 5px 15px 0px #ACB2C1",
background:"#679CF6"
}}>
<div style={{height: "7.5px",
width: "3px",
marginLeft: "31.285888671875px",
marginTop: "30px",
borderRadius:"2px",
border:" 3px solid rgba(218, 218, 218, 1)"

}}>
    
</div>
<div style={{height: "14px",
width: "3px",
marginLeft: "43.285888671875px",
marginTop: "-20px",
borderRadius:"2px",
border:" 3px solid rgba(218, 218, 218, 1)"

}}></div>
<div style={{height: "20px",
width: "3px",
marginLeft: "55.285888671875px",
marginTop: "-26px",
borderRadius:"2px",
border:" 3px solid rgba(218, 218, 218, 1)"

}}></div>
<div style={{height: "4px",
width: "35px",
marginLeft: "30.285888671875px",
marginTop: "2px",
borderRadius:"2px",
background:" rgba(218, 218, 218, 1)"

}}></div>
<img  style={{marginTop:"35px", marginLeft:"10px"}} src="https://www.freeiconspng.com/uploads/road-direction-icon-0.png" width="50" alt="Road Direction Icons No Attribution" />
<hr style={{width:"20px" , marginLeft:"25px"}}></hr>
<img  style={{marginTop:"3px", marginLeft:"10px",width:"50px" }}src="https://cdn.icon-icons.com/icons2/2785/PNG/512/shopping_cart_icon_177373.png"/>
<hr style={{width:"20px" , marginLeft:"25px"}}></hr>
<i style={{color:"gray"}} class="fa fa-cog" aria-hidden="true"></i>
<img style={{color:"gray"}} src={F}/>
</div>




        </Card>


      </>
    )
}

export default Dark