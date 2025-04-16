import logo from './logo.svg';
import KwikpayReport from './user-view';
import KwikpayNetFailedReport from './KwikpayNetFailReport/user-view';
import KwikpayPowerFailedReport from './KwikpayPowerFailReport/user-view';
import KwikpayMachineStatus from "./KwikpaayMachineStatus/user-view";
import { Route,Routes } from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<KwikpayReport/>} />
          <Route path="/NetworkFailed" element={<KwikpayNetFailedReport/>} />
          <Route path="/PowerFailed" element={<KwikpayPowerFailedReport/>} />
          <Route path="/MachineStatus" element={<KwikpayMachineStatus/>}/>
      </Routes>

    </div>
  );
}

export default App;
