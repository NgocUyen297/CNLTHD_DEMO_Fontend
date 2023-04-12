import './App.css';
import Header from './layouts/Header';
import Course from './components/Course';
import Footer from './layouts/Footer';
import React, { useReducer } from 'react';
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Lesson from './components/Lesson';
import LessonDetail from './components/LessonDetail';
import Login from './components/Login';
import { UserContext } from './MyContext';
import userReducer from './reducers/UserReducer';
import cookies from 'react-cookies';
  
function App() {
  const [user, dispatch] = useReducer(userReducer, cookies.load('current-user') || null)

  return (
    <UserContext.Provider value={[user, dispatch]}>
      <BrowserRouter>
      <Header />
        <Container>
        <Routes>
            <Route path="/" element={<Course />} />
            <Route path="*" element={<h1>Comming soom.....</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses/:courseId/lessons" element={<Lesson />} />
            <Route path="/lessons/:lessonId" element={<LessonDetail />} />
        </Routes>
        </Container>
      <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
