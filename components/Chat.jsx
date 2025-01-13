'use client';

import {
  generateChatResponse,
} from '@/utils/actions';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import ChatMessagesList from './ChatMessagesList';
import ChatInput from './ChatInput';
// import toast from 'react-hot-toast';

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const { mutate, isPending, error, reset } = useMutation({
    mutationFn: async () => {
      const response = await generateChatResponse(messages);

      if (!response) {
        // toast.error('Something went wrong...');
        console.log("Something went wrong...");
        return;
      }
      setMessages((prev) => [...prev, {content: response.content}]);
      return response
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { content: text };
    setMessages((prev) => [...prev, query]);
    setText('');
    mutate([...messages, { content: text }]);
  };

  return (
    <>
      <div className='h-full overflow-y-scroll overflow-x-hidden'>
        <ChatMessagesList messages={messages} isPending={isPending}/>
      </div>
      <ChatInput handleSubmit={handleSubmit} setText={setText} text={text} isPending={isPending}/>
    </>
  );
};
export default Chat;