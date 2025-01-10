import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/Card'; 
import { FootprintsIcon } from 'lucide-react';

export function Cart() {
  return (
    <div className="h-full py-6">
      <Card className="h-full border-0 rounded-none">
        <CardHeader className="border-b">
          <CardTitle>Cart</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="w-32 h-32 mx-auto bg-gray-100 rounded-lg p-6">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M35 65 C 35 65, 50 75, 65 65"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="35" cy="45" r="5" fill="currentColor" />
                <circle cx="65" cy="45" r="5" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Your cart is currently empty</h2>
          </div>
        </CardContent>
        <CardFooter className="mt-auto border-t p-4">
          <div className="flex items-center gap-2 w-full bg-gray-50 p-4 rounded-lg">
            <FootprintsIcon className="h-5 w-5 text-gray-500" />
            <span className="text-red-500 font-medium">Out of delivery zone</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
