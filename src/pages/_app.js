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
  Button
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
          <Button
            onClick={handleToggleChat}
            style={{ height: "65px", width: "65px", background: "red" }}
          />
        </div>
      </div>
    )
  );
}
