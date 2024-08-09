<script lang="ts">
	import { ImageRadioGroup } from '$components/data-input/image-radio-group';
	import { testSchema } from '$lib/zod/schemas';
	import { Fieldset } from 'formsnap';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import type { PageData } from './$types';
	import { Button } from '$components/actions/button';
	import { Separator } from '$components/layout/separator';

	let { data }: { data: PageData } = $props();

	const form = superForm(data.form, {
		validators: zodClient(testSchema)
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
		<Separator />

		<section class="flex gap:32 py:16">
			<div class="flex flex:col min-w:196">
				<h2 class="color:primary f:18">Interface Theme</h2>
				<p class="color:neutral">Select your UI theme.</p>
			</div>

			<div>
				<Fieldset {form} name="test">
					<ImageRadioGroup
						orientation="horizontal"
						choices={[
							{
								value: 'test',
								label: 'test',
								image: {
									src: 'https://i.imgur.com/MdPOmFe.png',
									alt: 'face'
								},
								description: 'testdesc'
							},
							{
								value: 'test2',
								label: 'test2',
								image: {
									src: 'https://i.imgur.com/MdPOmFe.png',
									alt: 'face'
								},
								description: 'test2desc'
							}
						]}
						bind:value={$formData.test}
					/>
				</Fieldset>

				<!-- <SuperDebug data={$formData} /> -->
			</div>
		</section>

		<Separator />

		<div class="place-self:end flex gap:8">
			<Button size="small" color="secondary">Cancel</Button>
			<Button size="small" class="">Save changes</Button>
		</div>
	</form>
</div>
