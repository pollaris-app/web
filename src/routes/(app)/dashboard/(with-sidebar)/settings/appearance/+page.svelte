<script lang="ts">
	import { ImageRadioGroup } from '$components/data-input/image-radio-group';
	import { appearanceSchema } from '$lib/zod/schemas';
	import { Fieldset } from 'formsnap';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import type { PageData } from './$types';
	import { Button } from '$components/actions/button';
	import { Separator } from '$components/layout/separator';
	import { SettingsSection } from '$components/layout/settings/section';
	import { Select } from '$components/data-input/select';

	let { data }: { data: PageData } = $props();

	const form = superForm(data.form, {
		validators: zodClient(appearanceSchema)
	});

	const { form: formData, enhance } = form;

	const THEMES = [
		{
			value: 'system',
			label: 'System',
			image: {
				src: 'https://i.imgur.com/MdPOmFe.png',
				alt: 'system-theme'
			},
			description: 'Make your system automatically control the theme.'
		},
		{
			value: 'light',
			label: 'Light',
			image: {
				src: 'https://i.imgur.com/MdPOmFe.png',
				alt: 'light-theme'
			},
			description: 'Best to use during daylight.'
		},
		{
			value: 'dark',
			label: 'Dark',
			image: {
				src: 'https://i.imgur.com/MdPOmFe.png',
				alt: 'dark-theme'
			},
			description: 'Less straining to your eyes.'
		}
	];

	const ACCENTS = [
		{
			value: 'red',
			label: 'Red'
		},
		{
			value: 'blue',
			label: 'Blue'
		}
	];
</script>

<div class="flex flex:col gap:32">
	<div class="flex flex:col gap:8">
		<h1 class="color:white f:32 f:bold">Appearance</h1>
		<p class="color:neutral f:18">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatum numquam, magni
			accusantium amet ducimus nobis at veniam in fuga.
		</p>
	</div>

	<form method="POST" use:enhance class="flex flex:col gap:16">
		<SettingsSection
			{form}
			fieldName="theme"
			legend={{ title: 'Interface Theme', description: 'Select your UI theme.' }}
		>
			<ImageRadioGroup orientation="horizontal" choices={THEMES} bind:value={$formData.theme} />
		</SettingsSection>

		<SettingsSection
			{form}
			fieldName="theme"
			legend={{ title: 'Interface Theme', description: 'Select your UI theme.' }}
		>
			<Select multiple bind:data={$formData.accent} items={ACCENTS} placeholder="Test your stuff" />
		</SettingsSection>

		<Separator />

		<div class="place-self:end flex gap:8">
			<Button size="small" color="secondary">Cancel</Button>
			<Button size="small" class="">Save changes</Button>
		</div>

		<SuperDebug data={$formData} />
	</form>
</div>
