// in ActionProvider.jsx
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      "Hello I am Kovsie and I will be your online virtual assistant that help you navigate the UFS Online Virtual Clinic./nWHat can I help you with today?",
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTips = () => {
    const botMessage = createChatBotMessage(
      "Okay I see you looking for tips Here are some links that can help you navigate the website and get tips. https://www.ucsusa.org/tips/ \n https://www.ucsusa.org/tips/ \n https://www.ucsusa.org/tips/",
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleTips,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
