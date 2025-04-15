'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const DarkModeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<button
			className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? '🌞' : '🌙'}
		</button>
	);
};

export default DarkModeToggle;