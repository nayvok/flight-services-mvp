import { useState } from 'react';

import type { Service } from '@/lib/types';

export const useServices = () => {
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);

    const toggleService = (service: Service) => {
        setSelectedServices(prevState => {
            const isSelected = prevState.some(s => s.id === service.id);
            if (isSelected) {
                return prevState.filter(s => s.id !== service.id);
            }
            return [...prevState, service];
        });
    };

    const removeService = (serviceId: string) => {
        setSelectedServices(prevState =>
            prevState.filter(s => s.id !== serviceId),
        );
    };

    const totalPrice = selectedServices.reduce(
        (sum, service) => sum + service.price,
        0,
    );

    return {
        selectedServices,
        setSelectedServices,
        toggleService,
        removeService,
        totalPrice,
    };
};
