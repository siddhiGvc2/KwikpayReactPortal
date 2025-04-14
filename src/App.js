import logo from './logo.svg';
import KwikpayReport from './user-view';
import KwikpayNetFailedReport from './KwikpayNetFaulReport/user-view';
import { Route,Routes } from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<KwikpayReport/>} />
          <Route path="/NetworkFailed" element={<KwikpayNetFailedReport/>} />
      </Routes>

    </div>
  );
}

export default App;
