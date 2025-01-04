'use client';

import {
  generateChatResponse,
} from '@/utils/actions';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import CopyTextBtn from './CopyTextBtn';
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
      <div>
        {messages.map(({content}, index) => {
          const avatar = index % 2 ?  '🤖' : '👤';
          const bcg = index % 2 ? 'bg-base-100 justify-items-end' : 'bg-base-200 justify-items-start';
          return (
            <div
              key={index}
              className={`grid ${bcg} py-2 -mx-8 px-8 text-xl leading-loose border-b border-base-300 inline-block w-full`}
            >
              {
              index % 2 ? 
                <p className='max-w-3xl'>{content}<span className='ml-4'>{avatar}</span>
                   <CopyTextBtn messages={messages} index={index}/>
                </p> 
              :
                <p className='max-w-3xl'><span className='mr-4'>{avatar}</span>{content}</p>
            }
            </div>
          );
        })}
        {isPending ? <span className="loading loading-bars loading-xs"></span>: null}
      </div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </button>
          </label>
        </div>
      </form>
    </div>
  );
};
export default Chat;