import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ChartInit from '@/utils/ChartInit';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Star Weather',
    description: 'An advanced weather website where users can view current weather conditions, forecasts, air quality, weather maps, and more.',
    keywords: ['weather', 'forecast', 'air quality', 'maps', 'star weather', 'starweather', 'opensource', 'open source', 'react', 'nextjs', 'tailwindcss', 'typescript'],

    openGraph:{
        images:[{
            url: '/banner.png'
        }]
    }
};

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
                <Footer />
            </body>
        </html>
    );
}
