import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Calendar, Bed, DollarSign, UserPlus } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Home className="w-6 h-6 mr-2" />
            <span className="font-bold text-lg">Hospital Dashboard</span>
          </Link>
          <div className="flex space-x-4">
            <NavLink to="/patients" icon={<Users className="w-5 h-5" />} text="Patients" />
            <NavLink to="/appointments" icon={<Calendar className="w-5 h-5" />} text="Appointments" />
            <NavLink to="/beds" icon={<Bed className="w-5 h-5" />} text="Beds" />
            <NavLink to="/billing" icon={<DollarSign className="w-5 h-5" />} text="Billing" />
            <NavLink to="/staff" icon={<UserPlus className="w-5 h-5" />} text="Staff" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center hover:bg-blue-700 px-3 py-2 rounded">
    {icon}
    <span className="ml-1">{text}</span>
  </Link>
);

export default Navbar;