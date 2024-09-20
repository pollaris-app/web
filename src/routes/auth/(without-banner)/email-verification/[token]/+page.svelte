<script lang="ts">
	import { PinInput } from '$components/data-input/pin-input';
	import { Field } from 'formsnap';
	import type { PageData } from './$types';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { emailVerificationSchema } from '$lib/zod/schemas/auth/email-verification';
	import { Button } from '$components/actions/button';
	import { LoaderCircle } from 'lucide-svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const form = superForm(data.form, {
		validators: valibotClient(emailVerificationSchema),
		delayMs: 500,
		timeoutMs: 5000
	});

	const { form: formData, errors, message, enhance, delayed } = form;
</script>

<form method="POST" use:enhance>
	<Field {form} name="code">
		<PinInput bind:data={$formData.code} quantity={6} />
	</Field>

	<Button>
		{#if $delayed}
			<LoaderCircle />
		{:else}
			Verify
		{/if}
	</Button>
</form>

<SuperDebug data={{ $formData, $errors, $message }} />
