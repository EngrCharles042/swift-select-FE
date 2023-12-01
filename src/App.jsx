import {LoginForm} from "./components/Authentication/LoginForm.jsx";
import {Link, Route, Router, Routes} from "react-router-dom";
import {ResetPasswordEmail} from "./components/Authentication/ResetPasswordEmail.jsx";
import {JobSeekerSignUpForm} from "./components/Authentication/JobSeekerSignUpForm.jsx";
import {ResetPassword} from "./components/Authentication/ResetPassword.jsx";
import {JobSeekerPage} from "./components/Pages/JobSeekerPage.jsx";
import {LandingPage} from "./components/Pages/landingPage/LandingPage.jsx";
import {EmployerPage} from "./components/Pages/EmployerPage.jsx";
import {ChatPage} from "./components/Pages/ChatPage.jsx";
import {useState} from "react";



function App() {
    const [user, setUser] = useState();

    return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginForm onAuth={user => setUser(user)}/>}/>
            <Route path="/jobseeker-signup" element={<JobSeekerSignUpForm/>}/>
            <Route path="/forgot-password" element={<ResetPasswordEmail/>}/>
            <Route path="/reset-forgot-password" element={<ResetPassword/>}/>
            <Route path="/employer-page" element={<EmployerPage/>}/>
            <Route path="/jobseeker-page" element={<JobSeekerPage/>}/>
            <Route path="/chat" element={<ChatPage user={user} />}/>
        </Routes>
    </>
  )
}

export default App


