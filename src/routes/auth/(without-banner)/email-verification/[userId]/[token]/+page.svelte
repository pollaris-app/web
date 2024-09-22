<script lang="ts">
	import { PinInput } from '$components/data-input/pin-input';
	import { Field } from 'formsnap';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import {
		emailVerificationSchema,
		resendEmailVerificationSchema
	} from '$lib/zod/schemas/auth/email-verification';
	import { Button } from '$components/actions/button';
	import { LoaderCircle } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { AuthCard } from '$components/layout/auth-card';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const form = superForm(data.activateForm, {
		validators: valibotClient(emailVerificationSchema),
		onSubmit: ({ formData }) => {
			formData.set('token', data.token);
		},
		delayMs: 500,
		timeoutMs: 5000
	});

	const { form: formData, errors, message, enhance, delayed } = form;

	const {
		form: resendFormData,
		enhance: resendEnhance,
		errors: resendErrors,
		message: resendMessage
	} = superForm(data.resendForm, {
		validators: valibotClient(resendEmailVerificationSchema),
		onSubmit: ({ formData }) => {
			formData.set('userId', data.userId);
		}
	});
</script>

<AuthCard
	title="Email Verification"
	description="Check your inbox for further instructions on how to activate your account"
>
	<form method="POST" action="?/activate" use:enhance>
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

	<div>
		<p>Are you facing any problems with receiving the code?</p>

		<form method="POST" action="?/resend" use:resendEnhance>
			<button>Resend code</button>
		</form>

		<SuperDebug data={{ $resendFormData, $resendErrors, $resendMessage }} />
	</div>

	<SuperDebug data={{ $formData, $errors, $message }} />

	{#snippet footer()}
		<p>Want to signin?</p>
		<a href="/auth/signin">Signin</a>
	{/snippet}
</AuthCard>
