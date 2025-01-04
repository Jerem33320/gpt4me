import ReactMarkdown from 'react-markdown';
import CopyTextBtn from './CopyTextBtn';

const ChatMessagesList = ({messages, isPending}) => {
    return (
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
                    <p className='max-w-3xl'>
                        <ReactMarkdown>{content}</ReactMarkdown>
                        <span className='ml-4'>{avatar}</span>
                        <CopyTextBtn messages={messages} index={index}/>
                    </p> 
                :
                    <p className='max-w-3xl'><CopyTextBtn messages={messages} index={index}/><span className='mr-4'>{avatar}</span>{content}</p>
                }
                </div>
            );
            })}
            {isPending ? <span className="loading loading-bars loading-xs"></span>: null}
        </div>
    );
  };
  export default ChatMessagesList;