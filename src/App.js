import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import Login from './Pages/Teacher/Login';
import Register from './Pages/Student/Register';
import Main from './Pages/Student/MainPage';
import Test from './Pages/Student/Test';
import Result from './Pages/Student/Result';
import NewTest from './Pages/Teacher/NewTest';

export default function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <NewTest />
    </ThemeConfig>
  );
}