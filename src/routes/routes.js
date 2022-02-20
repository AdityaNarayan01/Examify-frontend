import HomePage from '../Pages/HomePage';

//student
import StudentHome from '../Pages/Student/MainPage';
import StudentLogin from '../Pages/Student/Login';
import StudentRegister from '../Pages/Student/Register';
import StudentTest from '../Pages/Student/Test';
import StudentResult from '../Pages/Student/Result';
import UpcomingTest from '../Pages/Student/UpcomingTestPage';
import SubmittedTest from '../Pages/Student/SubmittedTestPage';

//teacher
import TeacherHome from '../Pages/Teacher/MainPage';
import TeacherLogin from '../Pages/Teacher/Login';
import TeacherRegister from '../Pages/Teacher/Register';
import AddTest from '../Pages/Teacher/NewTest';
import UpdateTest from '../Pages/Teacher/UpdateTest';
import Result from '../Pages/Teacher/Result';
import TeacherCompletedTest from '../Pages/Teacher/TeacherCompletedTest';
import TeacherUpcomingTest from '../Pages/Teacher/TeacherUpcomingTest';
import StudentTestResult from '../Pages/Teacher/StudentResult';


const routes = [
  
    //student
    { 
        path: '/studentHome',
        component: StudentHome,
        protected: true,
        isStudent: true
    },
    { 
        path: '/StudentLogin',
        component: StudentLogin,
        protected: false,
        isStudent: true
    },
    { 
        path: '/StudentRegister',
        component: StudentRegister,
        protected: false,
        isStudent: true
    },
    { 
        path: '/StudentTest/:id',
        component: StudentTest,
        protected: true,
        isStudent: true
    },
    { 
        path: '/StudentResult/:id',
        component: StudentResult,
        protected: true,
        isStudent: true
    },
    { 
        path: '/StudentUpcomingTest',
        component: UpcomingTest,
        protected: true,
        isStudent: true
    },
    { 
        path: '/StudentSubmittedTest',
        component: SubmittedTest,
        protected: true,
        isStudent: true
    },
    //teacher
    { 
        path: '/TeacherHome',
        component: TeacherHome ,
        protected: true,
        isStudent: false
    },
    { 
        path: '/TeacherLogin',
        component: TeacherLogin ,
        protected: false,
        isStudent: false
    },
    { 
        path: '/TeacherRegister',
        component: TeacherRegister,
        protected: false,
        isStudent: false
    },
    { 
        path: '/AddTest',
        component: AddTest ,
        protected: true,
        isStudent: false
    },
    { 
        path: '/UpdateTest/:id',
        component: UpdateTest ,
        protected: true,
        isStudent: false
    },
    { 
        path: '/TeacherUpcomingTest',
        component: TeacherUpcomingTest,
        protected: true,
        isStudent: false
    },
    { 
        path: '/TeacherCompletedTest',
        component: TeacherCompletedTest,
        protected: true,
        isStudent: false
    },
    { 
        path: '/Result/:id',
        component: Result,
        protected: true,
        isStudent: false
    },
    { 
        path: '/TestResult/:id/:sid',
        component: StudentTestResult,
        protected: true,
        isStudent: false
    },
    {
        path: '/',
        component: HomePage,
        protected: false,
        isStudent: false
    },
]


export default routes;