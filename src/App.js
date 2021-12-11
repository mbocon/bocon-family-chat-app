import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  if (!localStorage.getItem('userName')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={localStorage.getItem('userName')}
      userSecret={localStorage.getItem('userSecret')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;
