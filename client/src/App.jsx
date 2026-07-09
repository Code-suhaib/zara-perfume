import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import TransitionWrapper from './components/TransitionWrapper';

function App() {
  return (
    <BrowserRouter>
      <TransitionWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </TransitionWrapper>
    </BrowserRouter>
  );
}

export default App;
