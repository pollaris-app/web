<script lang="ts">
	import { PasswordResetSchema } from '$lib/validation/schemas/auth/password-reset';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { Field } from 'formsnap';
	import { PasswordInput } from '$components/data-input/password-input';
	import { Button } from '$components/actions/button';

	import type { PageData } from './$types';
	import { LoaderCircle } from 'lucide-svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const form = superForm(data.form, {
		validators: valibotClient(PasswordResetSchema),
		onSubmit: ({ formData }) => {
			formData.set('userId', data.userId);
			formData.set('token', data.token);
		},
		delayMs: 500,
		timeoutMs: 5000
	});

	const { form: formData, errors, message, enhance, delayed } = form;
</script>

<form method="POST" use:enhance>
	<Field {form} name="password">
		<PasswordInput bind:data={$formData.password} scoreBar />
	</Field>

	<Field {form} name="confirmPassword">
		<PasswordInput bind:data={$formData.confirmPassword} />
	</Field>

	<Button>
		{#if $delayed}
			<LoaderCircle />
		{:else}
			Reset Password
		{/if}
	</Button>
</form>

<SuperDebug data={{ $formData, $errors, $message }} />
