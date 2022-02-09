import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import Login from './Pages/Teacher/Login';
import Register from './Pages/Student/Register';
import Main from './Pages/Student/MainPage';

export default function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Main />
    </ThemeConfig>
  );
}