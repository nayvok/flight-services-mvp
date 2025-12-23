import Cart from '@/components/cart/cart.tsx';
import ServiceCard from '@/components/service-card/service-card.tsx';
import MainLayout from '@/layout/main-layout.tsx';
import { useServices } from '@/lib/hooks/use-services.tsx';
import { SERVICES } from '@/lib/mock/services.ts';

function App() {
    const { selectedServices, toggleService, removeService, totalPrice } =
        useServices();

    return (
        <MainLayout>
            <div className="flex flex-row gap-8">
                <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
                    {SERVICES.map(service => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            name={service.name}
                            price={service.price}
                            isSelected={selectedServices.some(
                                s => s.id === service.id,
                            )}
                            onToggle={() => toggleService(service)}
                        />
                    ))}
                </div>

                <Cart
                    selectedServices={selectedServices}
                    totalPrice={totalPrice}
                    onRemoveService={(id: string) => removeService(id)}
                />
            </div>
        </MainLayout>
    );
}

export default App;
