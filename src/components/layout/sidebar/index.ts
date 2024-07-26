import type { PageData } from '../../../routes/(app)/dashboard/$types';
import Root from './sidebar.svelte';
import { Compass, Home, PieChart } from 'lucide-svelte';

const CHOICES = [
	{
		value: 'poll',
		label: 'Poll',
		description: 'A super nice description that tells you all.'
	},
	{
		value: 'quiz',
		label: 'Quiz',
		description: 'A super nice description that tells you all.'
	}
];

const PAGES = [
	{
		name: 'Home',
		path: '/dashboard',
		icon: Home
	},
	{
		name: 'Discover',
		path: '/dashboard/discover',
		icon: Compass
	},
	{
		name: 'Insights',
		path: '/dashboard/insights',
		icon: PieChart
	}
] as const;

interface Props {
	data: PageData;
}

export { Root as Sidebar, CHOICES, PAGES, type Props as SidebarProps };
