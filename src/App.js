import './App.css';
import RouterApp from './Routes/RouterApp';

const styleApp={overflow: "hidden"}

function App() {
  return (
    <div style = {styleApp} className="App">
      <RouterApp/>
    </div>
  );
}

export default App;
