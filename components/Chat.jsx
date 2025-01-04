'use client';

import {
  generateChatResponse,
} from '@/utils/actions';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { IoEnter } from "react-icons/io5";
import ChatMessagesList from './ChatMessagesList';
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
    <div className='min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
      <ChatMessagesList messages={messages} isPending={isPending}/>
      <form onSubmit={handleSubmit} className='max-w-4xl pt-12'>
        <div className='join w-full'>
          <label className="input flex items-center gap-2 focus:outline-none focus:shadow-none w-full">
            <input 
              type="text" 
              className="grow" 
              placeholder="Chat..." 
              value={text}
              required
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className='btn btn-primary join-item'
              type='submit'
              disabled={isPending}
            >
              <IoEnter className='w-10 h-10 text-white' />
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};
export default Chat;