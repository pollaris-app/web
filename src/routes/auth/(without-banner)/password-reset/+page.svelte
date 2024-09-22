<script lang="ts">
	import { passwordResetRequestSchema } from '$lib/zod/schemas/auth/password-reset';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import type { PageData } from './$types';
	import { Field } from 'formsnap';
	import { TextInput } from '$components/data-input/text-input';
	import { Button } from '$components/actions/button';
	import { LoaderCircle } from 'lucide-svelte';
	import { AuthCard } from '$components/layout/auth-card';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const form = superForm(data.form, {
		validators: valibotClient(passwordResetRequestSchema),
		delayMs: 500,
		timeoutMs: 5000
	});

	const { form: formData, errors, message, enhance, delayed } = form;
</script>

<AuthCard title="Password Recovery" description="test">
	<form method="POST" use:enhance class="flex flex:col gap:8">
		<Field {form} name="email">
			<TextInput bind:data={$formData.email} label="Email" />
		</Field>

		<Button class="jc:center mt:8">
			{#if $delayed}
				<LoaderCircle />
			{:else}
				Reset Password
			{/if}
		</Button>
	</form>

	<SuperDebug data={{ $formData, $errors, $message }} />
</AuthCard>
