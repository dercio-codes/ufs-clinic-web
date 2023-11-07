import * as React from "react";
import { Accordion, Box } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionItem({ q, a }) {
  return (
    <Accordion
      sx={{
        border: "1px solid grey",
        width: "100%",
        margin: "1px auto",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          padding: "21px",
          margin: "0 auto",
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>{q}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: "21px",
          background: "rgba(0,24,66,.3)",
          margin: "0 auto",
        }}
      >
        <Typography>{a}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default function FrequentlyAsked() {
  return (
    <Box>
      {questions.map((item, index) => {
        return <AccordionItem q={item.question} a={item.answer} />;
      })}
    </Box>
  );
}

const questions = [
  {
    question: "What are your hours of operation?",
    answer:
      "Our hours of operation are Monday through Friday, 8:00 AM to 5:00 PM. We are also open on Saturdays from 9:00 AM to 1:00 PM.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services, including but not limited to: General medical care ,Preventive care ,Women's health ,Men's health ,Pediatric care ,Geriatric care ,Mental health care ,Laboratory services ,X-ray and imaging services",
  },
  {
    question: "Do you accept my insurance?",
    answer:
      "We accept most major insurance plans. Please contact your insurance company to verify your coverage.",
  },
  {
    question: "How do I make an appointment?",
    answer:
      'You can make an appointment by calling us at [phone number] or by clicking the "Book Appointment" button on our website.',
  },
  {
    question: "What do I need to bring to my appointment?",
    answer:
      "Please bring your insurance card, photo ID, and a list of your current medications.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24 hours notice for cancellations. Please call us at [phone number] to cancel your appointment.",
  },
];
