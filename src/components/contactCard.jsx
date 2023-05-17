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
  maxWidth: 600, // doubled the width
  width: "100%",

  margin: "0 auto",
  backgroundColor: "#f9f9f9",
  boxShadow: "0px 3px 10px rgba(0,0,0,0.3)", // added a box shadow
  borderRadius: 16, // rounded corners
  padding: 20, // increased padding
});

const ContactHeader = styled(CardHeader)({
  textAlign: "center",
  marginBottom: 16, // added some bottom margin
  textDecoration: "underline", // added an underline
  fontSize: { xs: 12, md: 18, lg: 24 },
});

const ContactDetails = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
});

const ContactItem = styled(Typography)({
  display: "flex",

  margin: "16px 0", // increased margin

  fontSize: { xs: 12, md: 18, lg: 24 },
});

const ContactIcon = styled("span")({
  marginRight: 16, // increased right margin
});

function ContactPage() {
  return (
    <ContactCard>
      <ContactHeader title="Contact Me" />
      <Divider sx={{ color: "brown", margin: 5 }} />
      <ContactDetails>
        <ContactItem>
          <ContactIcon>
            <MailOutline />
          </ContactIcon>
          udayl.itpath@gmail.com
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <Phone />
          </ContactIcon>
          +91 8200504513
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <Fax />
          </ContactIcon>
          +1-234-567-8901
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <LocationCity />
          </ContactIcon>
          Bodakdev-380054,ahemdabad
        </ContactItem>
      </ContactDetails>
    </ContactCard>
  );
}

export default ContactPage;
