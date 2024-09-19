<script lang="ts">
	import { passwordResetSchema } from '$lib/zod/schemas/auth/password-reset';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { Field } from 'formsnap';
	import { PasswordInput } from '$components/data-input/password-input';
	import { Button } from '$components/actions/button';

	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const form = superForm(data.form, {
		validators: valibotClient(passwordResetSchema),
		delayMs: 500,
		timeoutMs: 5000
	});

	const { form: formData, enhance, delayed } = form;
</script>

<form action="">
	<Field {form} name="password">
		<PasswordInput bind:data={$formData.password} scoreBar />
	</Field>

	<Field {form} name="confirmPassword">
		<PasswordInput bind:data={$formData.confirmPassword} />
	</Field>

	<Button>Submit</Button>
</form>
