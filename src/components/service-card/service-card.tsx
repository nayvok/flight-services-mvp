import { Check, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button.tsx';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card.tsx';
import type { Service } from '@/lib/types';
import { cn } from '@/lib/utils.ts';

interface ServiceCardProps extends Service {
    isSelected: boolean;
    onToggle: () => void;
}

const ServiceCard = ({
    id,
    name,
    price,
    isSelected,
    onToggle,
}: ServiceCardProps) => {
    return (
        <Card key={id} className={cn('', isSelected && 'ring-primary')}>
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                        <CardTitle className="text-base text-balance">
                            {name}
                        </CardTitle>
                        <CardDescription className="text-foreground mt-1 text-xl font-bold">
                            {price.toLocaleString('ru-RU')} ₽
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Button
                    onClick={() => onToggle()}
                    className="w-full"
                    size="sm"
                    variant={isSelected ? 'secondary' : 'default'}
                >
                    {isSelected ? (
                        <>
                            <Check className="mr-2 h-4 w-4" />
                            Добавлено
                        </>
                    ) : (
                        <>
                            <Plus className="mr-2 h-4 w-4" />
                            Добавить
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;
