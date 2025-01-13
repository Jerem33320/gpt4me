'use client';

import { IoEnter } from "react-icons/io5";

const ChatInput = ({handleSubmit, setText, text, isPending}) => {
  return (
    <footer className="flex relative h-48 w-full bottom-0 bg-neutral text-neutral-content flex-col justify-around items-center p-2">
        <form onSubmit={handleSubmit} className="w-full px-6 flex items-center mx-auto">   
            <input type="text" value={text}
            required
            onChange={(e) => setText(e.target.value)} className="border rounded-tr-none rounded-br-none rounded-lg block w-full ps-5 p-2.5 focus:outline-none" placeholder="Chat..." />
            <button disabled={isPending} type="submit" className="p-2.5 font-medium rounded-tl-none rounded-bl-none border btn btn-primary focus:ring-4 focus:outline-none focus:ring-opacity-50">
                <IoEnter className='w-6 h-6 text-white' />
            </button>
        </form>
        <p>Copyright © JP - All right reserved</p>
    </footer>
  );
};
export default ChatInput;