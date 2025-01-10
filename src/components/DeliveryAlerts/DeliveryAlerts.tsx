import { Alert, AlertDescription } from '../ui/Alert';
import { AlertCircle, Gift } from 'lucide-react';

export function DeliveryAlerts() {
  return (
    <div className="space-y-4 mb-6">
      <Alert variant="destructive" className="bg-white border-red-200">
        <AlertCircle className="h-4 w-4 w-[72px] h-[40px]" />
        <AlertDescription>
          Unfortunately, delivery is unavailable to this address
        </AlertDescription>
      </Alert>
      <Alert className="bg-green-50 border-green-200">
        <Gift className="h-4 w-4 w-[72px] h-[40px] text-green-500" />
        <AlertDescription className="text-green-700">
          Free delivery – on any order
        </AlertDescription>
      </Alert>
    </div>
  );
}
