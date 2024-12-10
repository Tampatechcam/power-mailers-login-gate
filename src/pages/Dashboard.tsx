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
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const COMPANY_ID = "Core Financial Management";

const Dashboard = () => {
  const navigate = useNavigate();

  const { data: advisorData } = useQuery({
    queryKey: ['advisorData', COMPANY_ID],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('advisor_data')
        .select('*')
        .eq('company_id', COMPANY_ID);
      if (error) throw error;
      return data;
    }
  });

  const { data: registrantData } = useQuery({
    queryKey: ['registrantData', COMPANY_ID],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('registrant_data')
        .select('*')
        .eq('Company ID', COMPANY_ID);
      if (error) throw error;
      return data;
    }
  });

  const { data: eventData } = useQuery({
    queryKey: ['eventData', COMPANY_ID],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('advisor_events')
        .select('*')
        .eq('company_id', COMPANY_ID);
      if (error) throw error;
      return data;
    }
  });

  const totalAdvisors = advisorData?.length || 0;
  const totalRegistrants = registrantData?.length || 0;
  const totalEvents = eventData?.length || 0;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AppSidebar />
        <div className="flex-1">
          {/* Header */}
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <SidebarTrigger />
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Client Dashboard</h1>
                    <p className="text-sm text-gray-500">{COMPANY_ID}</p>
                  </div>
                </div>
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
                  <CardTitle>Total Advisors</CardTitle>
                  <CardDescription>Active advisors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{totalAdvisors}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Total Registrants</CardTitle>
                  <CardDescription>Across all events</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{totalRegistrants}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Total Events</CardTitle>
                  <CardDescription>All scheduled events</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{totalEvents}</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Events Table */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
                <CardDescription>Latest scheduled events for {COMPANY_ID}</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event ID</TableHead>
                      <TableHead>Venue</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Mailing Quantity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {eventData?.slice(0, 5).map((event) => (
                      <TableRow key={event["Event ID"]}>
                        <TableCell className="font-medium">{event["Event ID"]}</TableCell>
                        <TableCell>{event["Venue Name"]}</TableCell>
                        <TableCell>{event["First Event Date"]}</TableCell>
                        <TableCell>{event["Mailing Quantity"]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;