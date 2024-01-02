import { createChatBotMessage } from "react-chatbot-kit";
import {
  Box,
  Typography,
  Grid,
  Menu,
  Tooltip,
  Paper,
  Button,
  Avatar,
  TextField,
} from "@mui/material";

const botName = "UFS Virtual Bot";
const GREEN = "#449842";
const BLUE = "#001842";
const RED = "#6A2F2F";

const chatbotConfig = {
  initialMessages: [
    createChatBotMessage(
      "Hello I am Kovsie and I will be your online virtual assistant that help you navigate the UFS Online Virtual Clinic.\n What can I help you with today?",
    ),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
      width: "500px",
      padding: "21px 0",
      color: "white",
    },
    chatButton: {
      backgroundColor: GREEN,
    },
  },
  customComponents: {
    // Replaces the default header
    header: () => <ChatBoxHeader />,
    // Replaces the default bot avatar
    botAvatar: (props) => (
      <Avatar {...props} src="/qwaqwa-logo.jpg" sx={{ objectFit: "contain" }} />
    ),
    // Replaces the default bot chat message container
    // botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    // // Replaces the default user icon
    // userAvatar: (props) => <MyCustomAvatar {...props} />,
    // // Replaces the default user chat message
    // userChatMessage: (props) => <MyCustomUserChatMessage {...props} />,
  },
};

export default chatbotConfig;
// width: "400px", // Set a fixed width
// height: "500px", // Set a fixed height
// maxHeight: "80vh", // Set a maximum height using viewport units (vh)
// overflow: "auto", // Enable scrolling if content exceeds the container size

const ChatBoxHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: GREEN,
        padding: "21px 12px",
        borderRadius: "12px 12px 0 0",
        color: "white",
      }}
    >
      Welcome to the UFS Virtual Clinic
    </Box>
  );
};
