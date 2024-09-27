<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { valibotClient, zodClient } from 'sveltekit-superforms/adapters';
	import { ACCENTS, FONT_SIZES, TABLE_VIEWS, THEMES } from '$lib/utils/constants/settings';
	import { SettingsSection } from '$components/layout/settings/section';
	import { ImageRadioGroup } from '$components/data-input/image-radio-group';
	import { Separator } from '$components/layout/separator';
	import { Button } from '$components/actions/button';
	import { appearanceSchema } from '$lib/zod/schemas';
	import { Select } from '$components/data-input/select/melt';

	let { data } = $props();
	const form = superForm(data.form, {
		validators: valibotClient(appearanceSchema),
		delayMs: 500,
		timeoutMs: 5000
	});

	const { form: formData, errors, message, enhance } = form;
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
			legend={{ title: 'Interface Theme', description: 'Select your UI theme' }}
		>
			<ImageRadioGroup
				orientation="horizontal"
				choices={THEMES}
				bind:value={$formData.theme as string}
			/>
		</SettingsSection>

		<SettingsSection
			{form}
			fieldName="accents"
			legend={{ title: 'Accent Color', description: 'Select your accent color' }}
		>
			<Select bind:value={$formData.accents} options={ACCENTS} />
		</SettingsSection>

		<SettingsSection
			{form}
			fieldName="tableView"
			legend={{ title: 'Table view', description: 'How are tables displayed in the app' }}
		>
			<ImageRadioGroup
				orientation="horizontal"
				choices={TABLE_VIEWS}
				bind:value={$formData.tableView as string}
			/>
		</SettingsSection>

		<SettingsSection
			{form}
			fieldName="fontSize"
			legend={{ title: 'Font size', description: 'How big is the font of the app' }}
		>
			<Select bind:value={$formData.fontSize} options={FONT_SIZES} />
		</SettingsSection>

		<Separator />

		<div class="place-self:end flex gap:8">
			<Button size="small" color="secondary">Cancel</Button>
			<Button size="small" class="">Save changes</Button>
		</div>

		<SuperDebug data={{ $formData, $errors, $message }} />
	</form>
</div>
