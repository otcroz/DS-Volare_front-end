import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import MyPage from './page/Mypage';
import ConvertPage from './page/ConvertPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/convert" element={<ConvertPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
