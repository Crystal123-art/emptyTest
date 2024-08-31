import React from 'react';
import SignupForm from './components/SignupForm';

const App = () => {
  return (
    <div>
      <h1>Leave Management System</h1>
      <SignupForm />
    </div>
  );
};

export default App;




// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import ManagerDashboard from './components/ManagerDashboard';
// import EmployeeDashboard from './components/EmployeeDashboard';

// function App() {
    // return (
        // <Router>
            // <Routes>
                // {/* Default route */}
                // {/* <Route path="/" element={<SignUp />} /> */}

                // {/* Other routes */}
                // {/* <Route path="/signup" element={<SignUp />} />
                // <Route path="/login" element={<Login />} />
                // <Route path="/manager-dashboard" element={<ManagerDashboard />} />
                // <Route path="/employee-dashboard" element={<EmployeeDashboard />} /> */}

                // {/* Fallback route: Redirect unknown paths to the default route */}
                // {/* <Route path="*" element={<Navigate to="/" />} /> */}
            // </Routes>
        // </Router>
//     );
// }

// export default App;



