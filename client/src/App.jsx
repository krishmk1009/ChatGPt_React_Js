import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import ChatMessage from './components/ChatMessage'
import ChatMessageGpt from './components/ChatMessageGpt'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [chatlog, setChatlog] = useState([{
    user: "gpt",
    message: "how can i help you "
  },
  
  ])
  async function handleSubmit(e) {
    e.preventDefault();
  
    // Combine the user's message with the existing chat log
    const message = `${chatlog.map(message => message.message).join('')}${input}`;
    
    // Send a request to the server and wait for the response
    const response = await fetch('http://localhost:3080', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
  
    // Update the chat log with both the user's message and the response from the server
    setChatlog([
      ...chatlog,
      { user: 'me', message: input },
      { user: 'gpt', message: data.message }
    ]);
  
    // Clear the input field
    setInput('');
  }
  

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <div className="App">
        <aside className="sidemenu">
          <div className='sidemenu-button'>
            <span>+</span>  New Chat
          </div>
        </aside>
        <section className="chatbox">
          <div className='chatlog'>


            {chatlog.map((message, index) => {
              return (
                <ChatMessage key={index} message={message} />
              )

            })}

            {/* <ChatMessageGpt /> */}
          </div>

          <div className='chatInputDiv'>
            <form onSubmit={handleSubmit}>

              <input rows="1"
                value={input}
                onChange={handleChange}
                className='textArea-input'
              />
            </form>
          </div>

        </section>
      </div>

    </>
  )
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" ? "chat-message-chatgpt" : ""}`}>
      <div className='chat-message-center'>
        <div className='avatar-chatgpt'>
        </div>
        <div className='message'>
          {message.message}
        </div>
      </div>


    </div>
  )
}

export default App
