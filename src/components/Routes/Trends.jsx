import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBInput,
  MDBProgress,
  MDBProgressBar
} from 'mdb-react-ui-kit';


export default function Donate() {
  return (
    <>

    

<MDBCard alignment='center' style = {{backgroundColor: '#817f7d', color: "white",}}>
    <MDBCardHeader><span style={{backgroundColor:"#B8CDF1", color:"#042050",}}>&nbsp;&nbsp;Education&nbsp;&nbsp;</span></MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Education for All</MDBCardTitle>
          <MDBCardText>Knowledge is Power. Empower Minds, Empower Lives</MDBCardText>
          <MDBCardText ><a href = "#" style = {{color: '#1b1624',}}>Read More</a></MDBCardText>
        
            <MDBInput
            placeholder = "Amount you want to donate"
            id="num"
            name="num"
            type="num"
            required
            style={{alignItems:"center",}}
          />
          <MDBBtn href='#' style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffaf30",
            color: "#ffffff"
          }} class="btn btn-default btn-sm">
            Donate Now
          </MDBBtn>
        </MDBCardBody>
        <MDBCardFooter className='text' style = {{color: '#1b1624',}}> 98 mins to go
        <MDBProgress>
          <MDBProgressBar width={88} >88% of 0.5 ETH</MDBProgressBar>
        </MDBProgress>
        </MDBCardFooter>
      </MDBCard>
          <br></br>
     
      </>
  );
}