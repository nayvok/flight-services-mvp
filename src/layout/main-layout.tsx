import type { PropsWithChildren } from 'react';

import Header from '@/components/header/header.tsx';

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="size-full px-6">
            <div className="m-auto max-w-350">
                <Header />
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
