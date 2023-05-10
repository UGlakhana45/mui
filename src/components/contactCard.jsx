import { Fax, LocationCity, MailOutline, Phone } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const ContactCard = styled(Card)({
  maxWidth: 800, // doubled the width
  width:'100%',
  margin: "0 auto",
  backgroundColor: "#f9f9f9",
  boxShadow: "0px 3px 10px rgba(0,0,0,0.3)", // added a box shadow
  borderRadius: 16, // rounded corners
  padding: 32, // increased padding
});

const ContactHeader = styled(CardHeader)({
  textAlign: "center",
  marginBottom: 16, // added some bottom margin
  textDecoration: "underline", // added an underline
});

const ContactDetails = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
});

const ContactItem = styled(Typography)({
  display: "flex",
  alignItems: "center",
  margin: "16px 0", // increased margin
});

const ContactIcon = styled("span")({
  marginRight: 16, // increased right margin
});

function ContactPage() {
  return (
    <ContactCard>
      <ContactHeader title="Contact Me" />
      <Divider />
      <ContactDetails>
        <ContactItem>
          <ContactIcon>
            <MailOutline />
          </ContactIcon>
          <Typography variant="body1">udayl.itpath@gmail.com</Typography>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <Phone />
          </ContactIcon>
          <Typography variant="body1">+91 8200504513</Typography>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <Fax />
          </ContactIcon>
          <Typography variant="body1">+1-234-567-8901</Typography>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <LocationCity />
          </ContactIcon>
          <Typography variant="body1">Bodakdev-380054,ahemdabad</Typography>
        </ContactItem>
      </ContactDetails>
    </ContactCard>
  );
}

export default ContactPage;
