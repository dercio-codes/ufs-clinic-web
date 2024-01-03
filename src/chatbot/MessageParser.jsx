// in MessageParser.js
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("hello")) {
      actions.handleHello();
    } else if (
      message.toLowerCase().includes("1") ||
      message.toLowerCase().includes("tips")
    ) {
      actions.handleTips();
    } else if (
      message.toLowerCase().includes("4") ||
      message.toLowerCase().includes("clear")
    ) {
      actions.handleClear();
    } else {
      actions.handleInvalidPrompt();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
