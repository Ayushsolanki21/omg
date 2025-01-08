import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Features/VideoChatting/Components/Home';
import VideoChating from './Features/VideoChatting/Components/VideoChating';
import Games from './Features/VideoChatting/Components/Games';
import Test from './Features/VideoChatting/Components/Test';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/videochat" element={<VideoChating/>} />
      <Route path="/Games" element={<Games/>} />
      <Route path="/test" element={<Test/>} />
        </Routes>
    </BrowserRouter>

  );
}

export default App
