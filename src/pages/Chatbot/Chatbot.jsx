import React from 'react'
import { useState } from 'react';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
  } from "@chatscope/chat-ui-kit-react";
  
  const API_KEY = "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";
  

const Chatbot = () => {


    const [messages, setMessages] = useState([
        {
          message: "hello, I am Princy",
          sender: "Chat bot",
        },
      ]);
    
      const [typing, setTyping] = useState(false);
      
  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };


    const newMessages = [...messages, newMessage]; //the old message, + the new message

    //update our message state
    setMessages(newMessages);
    

    //Typing indicator like chat gpt is typing...
    setTyping(true);
    

    //process message to chatgpt (send it over and see the response)
    await processMessageToChatGpt(newMessages);
  };
  async function processMessageToChatGpt(chatMessages) {
    // chatMessages {sender: "user" or "princy", message: "The message content here"};
    //apiMessages {role: "user" or "assitant", content: "The message content here"};

    let apiMessages = chatMessages.map((messageObject) => {
      // what willl come inside that messageObject
      let role = "";
      if (messageObject.sender === "Princy") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });



    // role: "user" -> a message from the user; "assistant" -> a response from the princy
    // "system" -> generally one initial message defining How we want chatgpt to talk

    const systemMessage = {
        role: "system",
        // content: "Explain all concepts like I am 10 years old.", //speak like a pirate, explain like i am a 10 years old software engineer
        content: "Speak like a pirate.", //speak like a pirate, explain like i am a 10 years old software engineer
      };
  

      const apiRequestBody = {
        model: "gpt-3.5-turbo",
        systemMessage,
        messages: [...apiMessages],
      };
  
      // need to uncomment
  
      await fetch("https://api.openai.com/v1/chat/completions", {
        // method: "POST",
        headers: {
        //   Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data);
          console.log(data.choices[0].message.content);
          setMessages([
            ...chatMessages,
            {
              message: data.choice[0].message.content,
              sender: "Princy",
            },
          ]);
          setTyping(false);
        });
    }
   

  return (
    <div
    style={{
      position: "relative",
      height: "500px",
      width: "30vw",
      margin: "auto",
    }}
  >
    <MainContainer>
      <ChatContainer>
        <MessageList
          scrollBehavior="smooth"
          typingIndicator={
            typing ? (
              <TypingIndicator content="Princy is typing..." />
            ) : null
          }
          //if typing is true then we are going to show a TypingIndicator(chatbot is typing... else null(nothing))
        >
          {/* <Message
            model={{
              message: "Hello my friend",
              sentTime: "just now",
              sender: "Joe",
            }}
          /> */}
          {messages.map((message, i) => {
            return <Message key={i} model={message} />;
          })}
        </MessageList>
        <MessageInput placeholder="Type message here" onSend={handleSend} />
      </ChatContainer>
    </MainContainer>
  </div>
  
  )
}

export default Chatbot
