import './App.css';
import SimpleCounterComponent from './components/SimpleCounterComponent';
import PureCounterComponent from './components/PureCounterComponents';

function App() {
  return (
    <div >
      <SimpleCounterComponent/>
      <PureCounterComponent/>
    </div>
  );
}

export default App;