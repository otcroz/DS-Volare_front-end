import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MainPage from './page/MainPage';
import MyPage from './page/Mypage';
import ConvertPage from './page/ConvertPage';
import NavBar from './component/base/Navbar';
import { MainPageAnimateProvider } from './context/mainAnimationContext';

// initialize queryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

const App = () => {
  return (
    <>
      <MainPageAnimateProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/main/" element={<MainPage />} />
              <Route path="/mypage/" element={<MyPage />} />
              <Route path="/convert/" element={<ConvertPage />} />
            </Routes>
          </Router>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </MainPageAnimateProvider>
    </>
  );
};

export default App;
