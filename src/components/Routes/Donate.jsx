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
    <div style = {{backgroundColor: '#1b1624', color: "white",}}>

    <MDBCard alignment='center' style = {{backgroundColor: '#817f7d', color: "white",}}>
      <MDBCardHeader><span style={{backgroundColor:"#f4a8a8", color:"red",}}>&nbsp;&nbsp;Medical&nbsp;&nbsp;</span></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Health for All</MDBCardTitle>
        <MDBCardText>Together, We can make a difference in the lives of people who need it the most..</MDBCardText>
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
      <MDBCard alignment='center'>
      <MDBCardHeader><span style={{backgroundColor:"#f5ff00", color:"#ff7b00",}}>&nbsp;&nbsp;Technology&nbsp;&nbsp;</span></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#' style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "blue",
                color: "#ffffff"
            }} class = "btn btn-default btn-sm">
                Donate Now
        </MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className='text-muted' style={{alignContent:"end",}}> 34 hours to go</MDBCardFooter>
    </MDBCard>
    <br></br>

    <MDBCard alignment='center'>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#' style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "blue",
                color: "#ffffff"
            }} class = "btn btn-default btn-sm">
                Donate Now
        </MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'> 34 hours to go</MDBCardFooter>
    </MDBCard>
    <br></br>

    <MDBCard alignment='center'>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#' style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "blue",
                color: "#ffffff"
            }} class = "btn btn-default btn-sm">
                Donate Now
        </MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'> 34 hours to go</MDBCardFooter>
    </MDBCard>
      </div>
  );
}