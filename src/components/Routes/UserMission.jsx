import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBProgress,
  MDBProgressBar
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div style = {{backgroundColor: '#1b1624', color: "white",}}>
      <MDBCard alignment='center' style = {{backgroundColor: '#817f7d', color: "white", maxWidth: '740px'}}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src='https://www.isb.edu/content/dam/sites/managementrethink/Donation%20based%20Digital%20Crowdfunding%20in%20India.jpg' style = {{width: 1000, height:300,}} alt='...' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>Education for All</MDBCardTitle>
              <MDBCardText>
              Education is the greatest gift you can give anyone. In a country like ours where rural societies are still marred by the social issues of poverty, malnutrition, illiteracy and caste-based discrimination, this very access to affordable and good quality education is a far cry.
              </MDBCardText>
              <MDBCardText style = {{color: '#1b1624',}}>
                <small className='text' style = {{color: '#1b1624',}}>Last donated 12 mins ago</small>
              </MDBCardText>
              <MDBProgress>
                  <MDBProgressBar width={68} >68% of 1.3 ETH</MDBProgressBar>
              </MDBProgress>
              
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}