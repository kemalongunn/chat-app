import React, { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { init, subscribeChat,subscribeInititalMessages } from '../SocketApi'
import { useChat } from '../context/ChatContext'

function Container() {
  
  const { setAllMessages,allMessages } = useChat();

  useEffect(() => {
    console.log("allmessages",allMessages);
  },[allMessages])

  useEffect(() => {
      init();
      subscribeInititalMessages((message) => {
        setAllMessages(message);
      })
      subscribeChat((message) => {
        setAllMessages((prevState) => [...prevState, { message, fromMe: true }]);
      });
  },[])

  return (
    <div className='App'>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container