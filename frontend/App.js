//import './App.css';

import { useState } from "react";

 function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}
function MyComponent() {
  const [message, setMessage] = useState("lets chat...");
  const [list, setlist] = useState([]);

  const messagesend = () => {
    const newList = [message, ...list];
    setlist(newList);
    setMessage("");
  };

  const changemessage = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };
  return (
    <div>
      <div className="bg-dark text-white">
        <h1>MyChatApp by(amit kr singh_210940320016) </h1>
      </div>

      <div>
        <textarea
          className="p-5"
          placeholder="lets chats here"
          required
          textarea
          value={message}
          onChange={changemessage}
        />
        <input
          className="p-2 m-2"
          type="button"
          value="send"
          onClick={messagesend}
        />
        <div id ="parent">
          {list.map((item) => (
        <div>{item}</div>
           ))}
        </div>
      </div>
      </div>
      
    
  );
  }

export default  App;
