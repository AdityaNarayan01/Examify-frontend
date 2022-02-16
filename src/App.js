import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import TeacherPrivateRoutes from './hoc/TeacherProctectedRoutes';
import StudentPrivateRoutes from './hoc/StudentProtectedRoutes';
import CustomRoute from './hoc/CustomRoute';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import routes from './routes/routes';
import ScrollToTop from './components/ScrollToTop'


export default function App() {
  return (
    <Router>
    
      <ThemeConfig>
        <ScrollToTop />
        <GlobalStyles />
        
        <Switch>
          {routes.map((r, i) => (
            r.protected === true ? (
              r.isStudent === true ? (<StudentPrivateRoutes key={i} path={r.path} Component={r.component}/>) : 
              (<TeacherPrivateRoutes key={i} path={r.path} Component={r.component}/>)
            ) :
            (
              <CustomRoute key={i} path={r.path} Component={r.component}/>
            )
          ))}
        </Switch>

      </ThemeConfig>
    
    </Router>
  );
}