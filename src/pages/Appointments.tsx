import React, { useState } from 'react';
import { Calendar, Clock, User, X } from 'lucide-react';

const appointments = [
  { id: 1, patient: 'Alice Johnson', doctor: 'Dr. Smith', department: 'Cardiology', date: '2024-03-15', time: '09:00 AM' },
  { id: 2, patient: 'Bob Williams', doctor: 'Dr. Lee', department: 'Neurology', date: '2024-03-15', time: '10:30 AM' },
  { id: 3, patient: 'Carol Davis', doctor: 'Dr. Patel', department: 'Orthopedics', date: '2024-03-16', time: '02:00 PM' },
  // Add more mock data as needed
];

const Appointments: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const filteredAppointments = appointments.filter(appointment => 
    (selectedDate ? appointment.date === selectedDate : true) &&
    (selectedDepartment ? appointment.department === selectedDepartment : true)
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Appointment Scheduling</h1>
      <div className="flex space-x-4">
        <input
          type="date"
          className="border rounded-lg px-4 py-2"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <select
          className="border rounded-lg px-4 py-2"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="">All Departments</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopedics">Orthopedics</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAppointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

const AppointmentCard: React.FC<{ appointment: any }> = ({ appointment }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-start">
      <h3 className="text-lg font-semibold">{appointment.patient}</h3>
      <button className="text-gray-400 hover:text-red-500">
        <X className="w-5 h-5" />
      </button>
    </div>
    <p className="text-gray-600">{appointment.department}</p>
    <div className="mt-4 space-y-2">
      <div className="flex items-center text-sm text-gray-500">
        <User className="w-4 h-4 mr-2" />
        {appointment.doctor}
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <Calendar className="w-4 h-4 mr-2" />
        {appointment.date}
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="w-4 h-4 mr-2" />
        {appointment.time}
      </div>
    </div>
  </div>
);

export default Appointments;