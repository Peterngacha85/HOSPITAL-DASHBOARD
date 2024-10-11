import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Calendar, Bed, DollarSign } from 'lucide-react';

const data = [
  { name: 'Mon', patients: 40, appointments: 24, occupancy: 75 },
  { name: 'Tue', patients: 30, appointments: 13, occupancy: 50 },
  { name: 'Wed', patients: 20, appointments: 98, occupancy: 80 },
  { name: 'Thu', patients: 27, appointments: 39, occupancy: 65 },
  { name: 'Fri', patients: 18, appointments: 48, occupancy: 70 },
  { name: 'Sat', patients: 23, appointments: 38, occupancy: 55 },
  { name: 'Sun', patients: 34, appointments: 43, occupancy: 60 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Users />} title="Total Patients" value="1,234" />
        <StatCard icon={<Calendar />} title="Appointments Today" value="45" />
        <StatCard icon={<Bed />} title="Available Beds" value="23" />
        <StatCard icon={<DollarSign />} title="Revenue This Month" value="$125,000" />
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Weekly Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="patients" fill="#8884d8" />
            <Bar dataKey="appointments" fill="#82ca9d" />
            <Bar dataKey="occupancy" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow flex items-center">
    <div className="mr-4 text-blue-500">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default Dashboard;