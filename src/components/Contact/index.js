import React from 'react';
import styled from 'styled-components';
import { Phone, Email, LocationOn, Print } from '@mui/icons-material';
import { Snackbar } from '@mui/material';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  flex-direction: row;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.primary};
  margin-right: 12px;
`;

const InfoText = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
`;


const CallButton = styled.button`
  background-color: #d32f2f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-left: auto;
  display: block;

  &:hover {
    background-color: #b71c1c;
  }
`;

const MapSection = styled.div`
  flex: 1;
  padding: 20px;
  iframe {
    width: 100%;
    height: 350px;
    border-radius: 12px;
    border: none;
  }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  <Title>Contact</Title>

  return (

    <Container>
      {/* Left Side: Contact Info */}

      <InfoSection>
        <InfoItem>
          <IconWrapper><Phone /></IconWrapper>
          <InfoText>Telephone: 814953289</InfoText>
          <CallButton>Call</CallButton>
        </InfoItem>

        <InfoItem>
          <IconWrapper><Print /></IconWrapper>
          <InfoText>Fax: 812223418</InfoText>
        </InfoItem>

        <InfoItem>
          <IconWrapper><LocationOn /></IconWrapper>
          <InfoText>Postal Address: Central Provincial Council Complex, Pallekelle, Kundasale</InfoText>
        </InfoItem>

        <InfoItem>
          <IconWrapper><Email /></IconWrapper>
          <InfoText>Email: csecp1@gmail.com</InfoText>
        </InfoItem>

      </InfoSection>

      {/* Right Side: Map */}
      <MapSection>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2049249183567!2d80.67734501428797!3d7.277412594725425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36603a1a898c9%3A0x5db0c7688de76a12!2sChief%20Secretariat%20-%20Central%20Province!5e0!3m2!1sen!2slk!4v1695823890527!5m2!1sen!2slk"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MapSection>

      {/* Snackbar for email success */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Email sent successfully!"
        severity="success"
      />
    </Container>
  );
};

export default Contact;
