import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
            <div className='chat-message '>
            <div className='chat-message-center'>
              <div className='avatar'>
              </div>
              <div className='message'>
                Hello world
              </div>
            </div>


            </div>
            <div className='chat-message-chagpt'>
            <div className='chat-message-center'>
              <div className='avatar-chatgpt'>
              </div>
              <div className='message'>
                I am AI Model
              </div>
            </div>


            </div>
          </div>
          <div className='chatInputDiv'>
            <textarea rows="1" className='textArea-input'
            />
          </div>
        </section>
      </div>

    </>
  )
}

export default App
