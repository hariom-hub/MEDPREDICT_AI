import { useEffect } from 'react';

function Chatbot() {

    useEffect(() => {
        // Define the embedded chatbot configuration
        window.embeddedChatbotConfig = {
            chatbotId: "IvhsuCHPhECqYE6Ohlrqr",
            domain: "www.chatbase.co",
        };

        // Create a script element
        const script = document.createElement('script');
        script.src = "https://www.chatbase.co/embed.min.js";
        script.defer = true;
        script.innerText = "Ask me anything";

        // Append the script to the document body or head
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {/* You can add a placeholder or loading indicator here if needed */}
            <div id="chatbot-container"></div>
        </div>
    );
}

export default Chatbot;
