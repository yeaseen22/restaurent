import { Card } from '../ui/Card';
import { Button } from '../ui/Button'; 
import { Plus } from 'lucide-react'; 

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export function ProductCard({ title, price }: ProductCardProps) {
  return (
    <Card className="overflow-hidden bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square">
        <img src='https://eda.yandex/images/3805444/863bc0b5ec247958aea807b0e7c4951e-216x188.jpeg' alt={title} className="object-contain p-4 w-full h-full" />
      </div>
      <div className="p-4">
        <div className="mb-2 text-2xl font-semibold">
          {price.toLocaleString('ru-RU')}₸
        </div>
        <div className="text-lg mb-4">{title}</div>
        <Button variant="outline" className="w-full h-12 text-lg font-medium hover:bg-gray-50">
          <Plus className="h-5 w-5 mr-2" />
          Add
        </Button>
      </div>
    </Card>
  );
}
