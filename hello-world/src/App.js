import logo from './logo.svg';
import './App.css';
import Greet from './Components/greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import Destructuring from './Components/Destructuring';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';

function App() { 
  return (
    <div className="App">
      {/* <Greet> </Greet> */}
      {/* <Welcome></Welcome> */}
      {/*<Hello> </Hello>
      <Greet name = "Dhruv " lastName = "Shah"> 
        <p1> This is Children Paragraph</p1>
      </Greet>

      <Welcome name = "Dwayne" lastName = "Johnson"> </Welcome>
      <Message> </Message>
      <Counter> </Counter>
      <Destructuring name = "Dhruv" lastName = "Shah"> </Destructuring>
      <FunctionClick />
      <ClassClick></ClassClick>
      <EventBind> </EventBind>
      <ParentComponent> </ParentComponent>*/}
      <UserGreeting> </UserGreeting>
      <NameList></NameList>
  </div>
  );
}

export default App;
