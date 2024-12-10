import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SummaryCardsProps {
  showSampleData: boolean;
  totalAdvisors: number;
  totalRegistrants: number;
  totalEvents: number;
}

export const SummaryCards = ({ 
  showSampleData,
  totalAdvisors,
  totalRegistrants,
  totalEvents,
}: SummaryCardsProps) => {
  const sampleData = {
    advisors: 12,
    registrants: 245,
    events: 8,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Total Advisors</CardTitle>
          <CardDescription>Active advisors</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            {showSampleData ? sampleData.advisors : totalAdvisors}
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
          <CardTitle>Total Events</CardTitle>
          <CardDescription>All scheduled events</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            {showSampleData ? sampleData.events : totalEvents}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};