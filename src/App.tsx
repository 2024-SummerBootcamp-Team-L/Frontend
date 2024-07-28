import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';
import MainPage2 from './pages/MainPage2';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import JudgePageCopy from './pages/JudgePageCopy';
import JudgePageCopy2 from './pages/JudgePageCopy2';
import ResultPage from './pages/ResultPage';
import LatestPostPage from './pages/LatestPostPage';
import MyPostPage from './pages/MyPostPage';
import ResultPage2 from './pages/ResultPage2';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/MainPage2" element={<MainPage2 />} />
      <Route path="/SignUp" element={<SignupPage />} />
      <Route path="/Login" element={<LoginPage />} />

      <Route path="/CategoryPage" element={<CategoryPage />} />
      <Route path="/JudgePageCopy" element={<JudgePageCopy />} />
      <Route path="/JudgePageCopy2" element={<JudgePageCopy2 />} />

      <Route path="/LatestPostPage" element={<LatestPostPage />} />
      <Route path="/MyPostPage" element={<MyPostPage />} />
      <Route path="/ResultPage" element={<ResultPage />} />
      <Route path="/ResultPage2" element={<ResultPage2 />} />
    </Routes>
  );
}

export default App;
