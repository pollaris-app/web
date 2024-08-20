import type { FormPath, SuperForm } from 'sveltekit-superforms';
import Root from './settings-section.svelte';
import type { Snippet } from 'svelte';

export type Message = {
	status: 'success' | 'error' | 'warning';
	text: string;
};

interface Props<T extends Record<string, unknown>, M = any> {
	children: Snippet;
	form: SuperForm<T, M>;
	fieldName: FormPath<T>;
	legend: {
		title: string;
		description?: string;
	};
}

export { Root as SettingsSection, type Props as SettingsSectionProps };
