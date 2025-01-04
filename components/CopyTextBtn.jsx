import { BsCopy } from "react-icons/bs";

const CopyTextBtn = ({messages, index}) => {
    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(messages[index.toString()]?.content); 
        } catch (err) {
          console.error("Failed to copy text:", err);
        }
      };

    return (
        <button
            onClick={handleCopy}
            className='ml-4 py-2 px-2 rounded-md text-primary hover:bg-primary hover:text-white'
        >
            <BsCopy />
        </button>
    );
  };

  export default CopyTextBtn;