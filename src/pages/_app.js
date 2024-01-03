import React from "react";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./../components/footer";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import {
  Box,
  Typography,
  Grid,
  Menu,
  Tooltip,
  Paper,
  Button,
  IconButton
} from "@mui/material";

import config from "./../chatbot/chatbotConfig";
import MessageParser from "./../chatbot/MessageParser";
import ActionProvider from "./../chatbot/ActionProvider";

export default function App({ Component, pageProps }) {
  const [loaded, setLoaded] = React.useState(false);
  const [openChatBot, setOpenChatBot] = React.useState(false);

  React.useEffect(() => {
    AOS.init();
    setLoaded(true);
  }, []);

  const handleToggleChat = () => {
    openChatBot ? setOpenChatBot(false) : setOpenChatBot(true);
  };

  return (
    loaded && (
      <div className="App">
        <Component {...pageProps} />
        <Footer />
        <div
          style={{
            position: "fixed",
            right: "21px",
            bottom: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end"
          }}
        >
          <div style={{ display: openChatBot ? "block" : "none" }}>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>

          <IconButton
            onClick={handleToggleChat}
            sx={{
              height: "65px",
              width: "65px",
              border: "3px solid #357EC7",
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%"
            }}
          >
            <Box
              style={{
                height: "45px",
                width: "45px",
                backgroundColor: "",
                backgroundImage: "url('/chatbot.gif')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            />
          </IconButton>
        </div>
      </div>
    )
  );
}
