import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBProgress,
  MDBProgressBar
} from 'mdb-react-ui-kit';


export default function Donate() {
  return (
    <div style = {{backgroundColor: '#1b1624', color: "white",}}>

    <MDBCard alignment='center' style = {{backgroundColor: '#817f7d', color: "white",}}>
      <MDBCardHeader><span style={{backgroundColor:"#f4a8a8", color:"red",}}>&nbsp;&nbsp;Medical&nbsp;&nbsp;</span></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Health for All</MDBCardTitle>
        <MDBCardText>Together, We can make a difference in the lives of people who need it the most..</MDBCardText>
        <MDBCardText><a href = "#" style = {{color: '#1b1624',}}>Read More</a></MDBCardText>
        <MDBCardText>You have donated: 0.09 ETH</MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className='text' style = {{color: '#1b1624',}}> 
      34 hours to go
        <MDBProgress>
          <MDBProgressBar width={40} >40% of 0.75 ETH</MDBProgressBar>
        </MDBProgress>
      </MDBCardFooter>
    </MDBCard>
    <br></br>

    <MDBCard alignment='center' style = {{backgroundColor: '#817f7d', color: "white",}}>
    <MDBCardHeader><span style={{backgroundColor:"#B8CDF1", color:"#042050",}}>&nbsp;&nbsp;Education&nbsp;&nbsp;</span></MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Education for All</MDBCardTitle>
          <MDBCardText>Knowledge is Power. Empower Minds, Empower Lives</MDBCardText>
          <MDBCardText><a href = "#" style = {{color: '#1b1624',}}>Read More</a></MDBCardText>
          <MDBCardText>You have donated: 0.05 ETH</MDBCardText>
        </MDBCardBody>
        <MDBCardFooter className='text' style = {{color: '#1b1624',}}> 98 mins to go
        <MDBProgress>
          <MDBProgressBar width={88} >88% of 0.5 ETH</MDBProgressBar>
        </MDBProgress>
        </MDBCardFooter>
      </MDBCard>
          <br></br>
      </div>
  );
}