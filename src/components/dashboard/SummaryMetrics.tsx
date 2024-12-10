import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SummaryMetricsProps {
  showSampleData: boolean;
  upcomingEvents: number;
  totalRegistrants: number;
  daysUntilNextEvent: number;
  invoicesDue: number;
}

export const SummaryMetrics = ({
  showSampleData,
  upcomingEvents,
  totalRegistrants,
  daysUntilNextEvent,
  invoicesDue,
}: SummaryMetricsProps) => {
  const sampleData = {
    upcomingEvents: 5,
    registrants: 245,
    daysUntilNext: 7,
    invoicesDue: 3,
  };

  return (
    <div className="mb-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Upcoming Events</TableCell>
            <TableCell>Scheduled events</TableCell>
            <TableCell className="text-right">
              {showSampleData ? sampleData.upcomingEvents : upcomingEvents}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Total Registrants</TableCell>
            <TableCell>Across all events</TableCell>
            <TableCell className="text-right">
              {showSampleData ? sampleData.registrants : totalRegistrants}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Days Until Next</TableCell>
            <TableCell>Next scheduled event</TableCell>
            <TableCell className="text-right">
              {showSampleData ? sampleData.daysUntilNext : daysUntilNextEvent}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Invoices Due</TableCell>
            <TableCell>Pending payments</TableCell>
            <TableCell className="text-right">
              {showSampleData ? sampleData.invoicesDue : invoicesDue}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};