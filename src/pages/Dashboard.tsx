import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Jan', mailings: 4000 },
  { month: 'Feb', mailings: 3000 },
  { month: 'Mar', mailings: 2000 },
  { month: 'Apr', mailings: 2780 },
  { month: 'May', mailings: 1890 },
  { month: 'Jun', mailings: 2390 },
];

const mockClients = [
  { name: "John Smith", campaign: "Retirement Planning", status: "Active", lastMailing: "2024-02-15" },
  { name: "Sarah Johnson", campaign: "401k Rollover", status: "Pending", lastMailing: "2024-02-10" },
  { name: "Michael Brown", campaign: "Estate Planning", status: "Active", lastMailing: "2024-02-08" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Client Dashboard</h1>
            <Button variant="outline" onClick={() => navigate("/")}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Summary Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Total Clients</CardTitle>
              <CardDescription>Active client campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">127</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Mailings Sent</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2,847</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Response Rate</CardTitle>
              <CardDescription>Average this month</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">4.2%</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Mailing Performance</CardTitle>
            <CardDescription>Number of mailings sent per month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="mailings" fill="#1a365d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Clients Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Campaigns</CardTitle>
            <CardDescription>Latest client mailing campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client Name</TableHead>
                  <TableHead>Campaign Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Mailing</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockClients.map((client) => (
                  <TableRow key={client.name}>
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>{client.campaign}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        client.status === "Active" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {client.status}
                      </span>
                    </TableCell>
                    <TableCell>{client.lastMailing}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;