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
  IconButton,
  TextField,
} from "@mui/material";
import Link from "next/link";

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
  widgets: [
    {
      widgetName: "optionsWidget",
      widgetFunc: (props) => <OptionsWidget {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
      width: "500px",
      padding: "21px 12px",
      color: "white",
    },
    chatButton: {
      backgroundColor: BLUE,
    },
  },
  state: {
    gist: "Hey Bro",
    infoBox: "We Ready to rock",
  },
  customComponents: {
    // Replaces the default header
    header: (props) => <ChatBoxHeader {...props} />,
    // Replaces the default bot avatar
    botAvatar: (props) => <MyAvatar />,
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

const MyAvatar = (props) => {
  return (
    <IconButton
      {...props}
      sx={{
        height: "35px",
        width: "35px",
        border: "3px solid #357EC7",
        background: "white",
        display: "flex",
        margin: "0 12px 0 0",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
      }}
    >
      <Box
        style={{
          height: "35px",
          width: "35px",
          backgroundColor: "",
          backgroundImage: "url('/chatbot.gif')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </IconButton>
  );
};

const ChatBoxHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: BLUE,
        padding: "21px 12px",
        borderRadius: "12px 12px 0 0",
        color: "white",
      }}
    >
      Welcome to the UFS Virtual Clinic
    </Box>
  );
};

const OptionsWidget = (props) => {
  return (
    <Box
      sx={{
        padding: "21px 12px",
        borderRadius: "12px 12px 0 0",
        color: "red",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {["Tips", "Campaigns", "About", "Contact"].map((title, index) => {
        return (
          <Link
            href={`/${title.toLowerCase()}`}
            as={`/${title.toLowerCase()}`}
            style={{ width: "100%" }}
            onClick={() => {
              props.actions.handleClear();
            }}
          >
            <Box
              sx={{
                background: "transparent",
                minHeight: "50px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                border: `1px solid ${RED}`,
                margin: "12px auto",
                color: RED,
                borderRadius: "21px",
                "&:hover": {
                  background: RED,
                  color: "white",
                  border: `1px solid red`,
                  cursor: "pointer",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  width: "100%",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                {title}
              </Typography>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};
