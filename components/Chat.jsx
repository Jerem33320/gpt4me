'use client';

import {
  generateChatResponse,
} from '@/utils/actions';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
// import toast from 'react-hot-toast';

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await generateChatResponse(messages);

      console.log("res----------",response);
      if (!response) {
        // toast.error('Something went wrong...');
        console.log("Something went wrong...");
        return;
      }
      console.log("messages--------",messages)
      setMessages((prev) => [...prev, response.message]);
      setText(response.message);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { role: 'user', content: text };
    setMessages((prev) => [...prev, query]);
    setText('');
    mutate();
  };
console.log("messages",messages)
  return (
    <div className='min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
      <div>
        {messages.map((message, index) => {
          const avatar = index % 2 ?  '🤖' : '👤';
          const bcg = index % 2 ? 'bg-base-100' : 'bg-base-200';
          return (
            <div
              key={index}
              className={`${bcg} flex py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300`}
            >
              <span className='mr-4'>{avatar}</span>
              <p className='max-w-3xl'>{index % 2 ? message : message.content}</p>
            </div>
          );
        })}

        {isPending ? <span className='loading'></span> : null}
      </div>
      <form onSubmit={handleSubmit} className='max-w-4xl pt-12'>
        <div className='join w-full'>
          <input
            type='text'
            placeholder='Message GPT4Me'
            className='input input-bordered join-item w-full'
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className='btn btn-primary join-item'
            type='submit'
            disabled={isPending}
          >
            {isPending ? 'please wait...' : 'ask question'}
          </button>
          <button className='btn btn-primary join-item' onClick={() => setText("")}>Clear Input</button>
          <button className='btn btn-primary join-item' onClick={() => setMessages([])}>Clear Messages List</button>
        </div>
      </form>
    </div>
  );
};
export default Chat;