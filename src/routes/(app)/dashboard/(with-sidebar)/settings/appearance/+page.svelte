<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { ACCENTS, ACCENTS_DETAILS, THEMES } from '$lib/utils/constants/settings.js';
	import { SettingsSection } from '$components/layout/settings/section/index.js';
	import { ImageRadioGroup } from '$components/data-input/image-radio-group/index.js';
	import { Separator } from '$components/layout/separator';
	import { Button } from '$components/actions/button';
	import { appearanceSchema } from '$lib/zod/schemas/index.js';
	import { Select } from '$components/data-input/select';

	let { data } = $props();
	const form = superForm(data.form, {
		validators: zodClient(appearanceSchema)
	});

	const { form: formData, enhance } = form;
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
			fieldName="accents"
			legend={{ title: 'Interface Theme', description: 'Select your UI theme.' }}
		>
			<Select bind:data={$formData.accents} values={ACCENTS} details={ACCENTS_DETAILS} />
		</SettingsSection>

		<Separator />

		<div class="place-self:end flex gap:8">
			<Button size="small" color="secondary">Cancel</Button>
			<Button size="small" class="">Save changes</Button>
		</div>

		<SuperDebug data={$formData} />
	</form>
</div>
