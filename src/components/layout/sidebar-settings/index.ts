import Root from './sidebar-settings.svelte';

const CONTENT = [
	{
		id: 1,
		value: 'general',
		label: 'General',
		href: function () {
			return `/dashboard/settings`;
		}
	},
	{
		id: 2,
		value: 'account',
		label: 'Account',
		href: function () {
			return `/dashboard/settings/${this.value}`;
		}
	},
	{
		id: 3,
		value: 'appearance',
		label: 'Appearance',
		href: function () {
			return `/dashboard/settings/${this.value}`;
		}
	},
	{
		id: 4,
		value: 'notifications',
		label: 'Notifications',
		href: function () {
			return `/dashboard/settings/${this.value}`;
		}
	},
	{
		id: 5,
		value: 'billing',
		label: 'Billing',
		href: function () {
			return `/dashboard/settings/${this.value}`;
		}
	},
	{
		id: 6,
		value: 'security',
		label: 'Security',
		href: function () {
			return `/dashboard/settings/${this.value}`;
		}
	}
];

interface Props {}

export { Root as SidebarSettings, CONTENT, type Props as SidebarSettingsProps };
