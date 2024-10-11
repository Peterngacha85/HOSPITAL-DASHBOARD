import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PatientRecords from './pages/PatientRecords';
import Appointments from './pages/Appointments';
import BedAvailability from './pages/BedAvailability';
import Billing from './pages/Billing';
import StaffManagement from './pages/StaffManagement';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<PatientRecords />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/beds" element={<BedAvailability />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/staff" element={<StaffManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;