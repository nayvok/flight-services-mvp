import type { PropsWithChildren } from 'react';

import Header from '@/components/header/header.tsx';

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="size-full px-6">
            <div className="m-auto max-w-350 max-[1024px]:max-w-full">
                <Header />
                <main className="my-8 max-[1024px]:mb-34">{children}</main>
            </div>
        </div>
    );
};

export default MainLayout;
