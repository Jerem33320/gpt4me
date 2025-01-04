import { BsCopy } from "react-icons/bs";

const CopyTextBtn = ({messages, index}) => {
    const margin = index % 2 ? 'ml-4' : 'mr-4';
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
            className={`${margin} py-2 px-2 rounded-md text-primary hover:bg-primary hover:text-white`}
        >
            <BsCopy />
        </button>
    );
  };

  export default CopyTextBtn;