import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SummaryCardsProps {
  showSampleData: boolean;
  upcomingEvents: number;
  totalRegistrants: number;
  daysUntilNextEvent: number;
  invoicesDue: number;
}

export const SummaryCards = ({ 
  showSampleData,
  upcomingEvents,
  totalRegistrants,
  daysUntilNextEvent,
  invoicesDue,
}: SummaryCardsProps) => {
  const sampleData = {
    upcomingEvents: 5,
    registrants: 245,
    daysUntilNext: 7,
    invoicesDue: 3,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Scheduled events</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            {showSampleData ? sampleData.upcomingEvents : upcomingEvents}
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Total Registrants</CardTitle>
          <CardDescription>Across all events</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            {showSampleData ? sampleData.registrants : totalRegistrants}
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Days Until Next</CardTitle>
          <CardDescription>Next scheduled event</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            {showSampleData ? sampleData.daysUntilNext : daysUntilNextEvent}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invoices Due</CardTitle>
          <CardDescription>Pending payments</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            {showSampleData ? sampleData.invoicesDue : invoicesDue}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};