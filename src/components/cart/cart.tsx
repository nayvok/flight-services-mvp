import { X } from 'lucide-react';

import { Button } from '@/components/ui/button.tsx';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card.tsx';
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from '@/components/ui/item.tsx';
import type { Service } from '@/lib/types';
import { cn, pluralize } from '@/lib/utils.ts';

interface CartProps {
    selectedServices: Service[];
    totalPrice: number;
    onRemoveService: (id: string) => void;
}

const Cart = ({ selectedServices, totalPrice, onRemoveService }: CartProps) => {
    return (
        <Card
            className={cn(
                'sticky top-8 h-fit w-90',
                'max-[1024px]:fixed max-[1024px]:top-auto max-[1024px]:bottom-0 max-[1024px]:left-0 max-[1024px]:w-full max-[1024px]:flex-row max-[1024px]:items-center max-[1024px]:justify-between max-[1024px]:rounded-b-none max-[426px]:gap-0',
            )}
        >
            <CardHeader className="max-[1024px]:w-full">
                <div className="hidden w-full text-lg font-semibold max-[1024px]:block">
                    <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
                <CardDescription className="hidden max-[1024px]:block">
                    {selectedServices.length > 0 ? (
                        <span>
                            {selectedServices.length}{' '}
                            {pluralize(
                                selectedServices.length,
                                'услуга',
                                'услуги',
                                'услуг',
                            )}
                        </span>
                    ) : (
                        <span>Услуги не выбраны</span>
                    )}
                </CardDescription>
                <CardTitle className="max-[1024px]:hidden">Итого</CardTitle>
            </CardHeader>
            <CardContent className="custom-scrollbar flex max-h-125 flex-col gap-2 overflow-auto max-[1024px]:hidden">
                {selectedServices.length === 0 ? (
                    <p className="text-muted-foreground text-sm">
                        Выберите услуги
                    </p>
                ) : (
                    selectedServices.map(service => (
                        <Item key={service.id} variant="muted">
                            <ItemContent>
                                <ItemTitle>{service.name}</ItemTitle>
                                <ItemDescription>
                                    {service.price.toLocaleString('ru-RU')} ₽
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => onRemoveService(service.id)}
                                >
                                    <X />
                                </Button>
                            </ItemActions>
                        </Item>
                    ))
                )}
            </CardContent>
            <CardFooter className="flex-col gap-3">
                {selectedServices.length > 0 && (
                    <div className="flex w-full justify-between text-lg font-semibold max-[1024px]:hidden">
                        <span>Сумма:</span>
                        <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                    </div>
                )}
                <Button
                    size="lg"
                    className="w-full"
                    disabled={selectedServices.length === 0}
                >
                    Оформить заказ
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Cart;
