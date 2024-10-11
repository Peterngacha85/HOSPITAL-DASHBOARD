import React, { useState } from 'react';
import { DollarSign, Download } from 'lucide-react';

const billingData = [
  { id: 1, patient: 'John Doe', date: '2024-03-10', amount: 1500, status: 'Paid' },
  { id: 2, patient: 'Jane Smith', date: '2024-03-11', amount: 2000, status: 'Pending' },
  { id: 3, patient: 'Bob Johnson', date: '2024-03-12', amount: 1000, status: 'Overdue' },
  // Add more mock data as needed
];

const reports = [
  { id: 1, name: 'Daily Patient Inflow', date: '2024-03-14' },
  { id: 2, name: 'Monthly Revenue', date: '2024-03-01' },
  { id: 3, name: 'Occupancy Rate', date: '2024-03-14' },
];

const Billing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('billing');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Billing and Reports</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'billing' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('billing')}
        >
          Billing History
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'reports' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('reports')}
        >
          Reports
        </button>
      </div>
      {activeTab === 'billing' ? (
        <BillingHistory data={billingData} />
      ) : (
        <ReportsList reports={reports} />
      )}
    </div>
  );
};

const BillingHistory: React.FC<{ data: any[] }> = ({ data }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap">{item.patient}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
            <td className="px-6 py-4 whitespace-nowrap">${item.amount.toFixed(2)}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                item.status === 'Paid' ? 'bg-green-100 text-green-800' :
                item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ReportsList: React.FC<{ reports: any[] }> = ({ reports }) => (
  <div className="space-y-4">
    {reports.map((report) => (
      <div key={report.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{report.name}</h3>
          <p className="text-sm text-gray-500">{report.date}</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Download
        </button>
      </div>
    ))}
  </div>
);

export default Billing;