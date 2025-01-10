import  { useState } from "react";
import { Navbar } from "../components/Navbar";
import { RestaurantHeader } from "../components/RestaurantHeader";
import { DeliveryAlerts } from "../components/DeliveryAlerts";
import { ProductCard } from "../components/ProductCard";
import { Cart } from "../components/Cart";
import { MenuSidebar } from "../components/MenuSidebar";
import { Button } from "../components/ui/Button";
import { Menu } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Сандерс Баскет",
    price: 1990,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    title: "Баскет Сандерс Дуэт",
    price: 4200,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    title: "Френдс Бокс",
    price: 9050,
    image: "/placeholder.svg?height=400&width=400",
  },
];

const sections = [
  "What's new",
  "Соло баскеты",
  "Комбо",
  "Боксы",
  "Бургеры и сэндвичи",
  "Комбо баскеты",
  "Сочная курочка",
  "Снэки",
  "Напитки",
  "Дополнительно",
];

function RestaurantPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-screen flex flex-col bg-[#F5F4F2]">
      <Navbar />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr_300px] overflow-hidden">
        <div className={`hidden md:block ${isMenuOpen ? "block" : ""}`}>
          <MenuSidebar />
        </div>
        <main className="overflow-y-auto relative">
          <div className="p-4 md:p-6">
            <RestaurantHeader />
            <DeliveryAlerts />
            {sections.map((section) => (
              <section key={section} data-menu-section={section} className="mb-12">
                <h2 className="text-3xl font-bold mb-6">{section}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </section>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 left-4 md:hidden z-50 bg-white shadow-lg rounded-full"
            onClick={handleMenuToggle}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </main>
        <aside className="relative hidden lg:block bg-white border-l fixed top-[4%]">
          <Cart />
        </aside>
       
      </div>
    </div>
  );
}

export default RestaurantPage
