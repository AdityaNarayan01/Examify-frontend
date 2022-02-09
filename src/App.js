import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import Login from './Pages/Student/Login';
import Register from './Pages/Student/Register';

export default function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Register />
    </ThemeConfig>
  );
}