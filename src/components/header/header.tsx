import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button.tsx';
import { useTheme } from '@/lib/providers/theme-provider.tsx';

const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="ring-foreground/10 bg-card text-card-foreground flex items-center justify-between rounded-b-2xl p-6 pt-5 ring-1">
            <div className="flex flex-col">
                <span className="text-2xl max-[426px]:text-xl max-[375px]:text-base max-[375px]:font-medium">
                    Дополнительные услуги
                </span>
                <span className="text-muted-foreground max-[426px]:text-sm max-[375px]:hidden">
                    Выберите дополнительные услуги для вашего полёта
                </span>
            </div>
            <Button
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? <Moon /> : <Sun />}
            </Button>
        </header>
    );
};

export default Header;
