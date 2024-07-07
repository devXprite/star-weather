import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import ChartInit from '@/utils/ChartInit';
import SearchBar from '@/components/SearchBar';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ChartInit />
                <div className="mx-auto min-h-screen max-w-[86rem] p-4">
                    <SearchBar />
                    <div>{children}</div>
                </div>
            </body>
        </html>
    );
}
