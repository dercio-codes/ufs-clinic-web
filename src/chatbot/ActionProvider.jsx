// in ActionProvider.jsx
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      "Hello! I am Kovsie, your online virtual for the UFS Online Virtual Clinin. \n \n How can I assist you today? \n For tips, you can ask for help or provide more information about what you are looking for",
      {
        // withAvatar: false,
        delay: 2500,
        widget: "optionsWidget",
      },
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

  const handleInvalidPrompt = () => {
    const botMessage = createChatBotMessage(
      "Sorry, I couldn't understand your request. Please try again with a valid input. If you need assistance, you can ask for help or provide more information about what you are looking for",
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleClear = () => {
    setState((prev) => ({
      ...prev,
      messages: [],
    }));
    handleHello();
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleTips,
            handleInvalidPrompt,
            handleClear,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
