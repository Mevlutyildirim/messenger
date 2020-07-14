import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

export default function App() {
  
  const [messages, useMessages] = useState([{
    _id: 1,
    text: 'Hello mevlüt ',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    }}]);

    onSendMessages(messages = []) {
      useMessages(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }))
    }
  

  return (
      <GiftedChat messages={messages} onSend={messages => onSendMessages(messages)}  user={{
          _id: 1,
        }}
      />
  );
}
