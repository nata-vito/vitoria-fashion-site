import Backdrop from "./components/Backtrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Learn Node'/>
      <Todo text='Learn JS'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
