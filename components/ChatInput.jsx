'use client';

import { IoEnter } from "react-icons/io5";

const ChatInput = ({handleSubmit, setText, text, isPending}) => {
  return (
    <form onSubmit={handleSubmit} class="w-11/12 px-6 flex items-center self-center mx-auto fixed bottom-10">   
        <input type="text" value={text}
        required
        onChange={(e) => setText(e.target.value)} class="border rounded-tr-none rounded-br-none rounded-lg block w-full ps-5 p-2.5 focus:outline-none" placeholder="Chat..." />
        <button disabled={isPending} type="submit" class="p-2.5 text-sm font-medium rounded-tl-none rounded-bl-none border btn btn-primary focus:ring-4 focus:outline-none focus:ring-opacity-50">
            <IoEnter className='w-6 h-6 text-white' />
        </button>
    </form>
  );
};
export default ChatInput;