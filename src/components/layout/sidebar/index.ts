import Root from './sidebar.svelte';
import { Compass, Home, PieChart } from 'lucide-svelte';

const TRIGGERS = [
    {
        id: 'poll',
        label: 'Poll',
        description: 'A super nice description that tells you all.'
    },
    {
        id: 'quiz',
        label: 'Quiz',
        description: 'A super nice description that tells you all.'
    }
] as const;

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
];

interface Props {}

export { Root as Sidebar, TRIGGERS, PAGES, type Props as SidebarProps };
