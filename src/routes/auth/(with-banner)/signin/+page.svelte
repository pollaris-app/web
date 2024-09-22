<script lang="ts">
	import { signInSchema } from '$lib/zod/schemas/auth/signin';
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from '../../(with-banner)/signin/$types';
	import { Field } from 'formsnap';
	import { TextInput } from '$components/data-input/text-input';
	import { PasswordInput } from '$components/data-input/password-input';
	import { LoaderCircle } from 'lucide-svelte';
	import { Button } from '$components/actions/button';
	import { Checkbox } from '$components/data-input/checkbox';
	import { AuthBanner } from '$components/layout/auth-banner';
	import { valibotClient } from 'sveltekit-superforms/adapters';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const form = superForm(data.form, {
		validators: valibotClient(signInSchema),
		delayMs: 500,
		timeoutMs: 5000
	});

	const { form: formData, enhance, delayed } = form;
	const { title, description, header } = data.page;
</script>

<AuthBanner {title} {description} {header}>
	<form method="POST" use:enhance class="flex flex:col gap:8">
		<Field {form} name="email">
			<TextInput bind:data={$formData.email} label="Email" placeholder="john@doe.com" />
		</Field>

		<div class="flex flex:col gap:4">
			<Field {form} name="password">
				<PasswordInput bind:data={$formData.password} label="Password" />
			</Field>

			<Field {form} name="remember">
				<div class="flex jc:space-between ai:center">
					<Checkbox bind:checked={$formData.remember} label="Remember Me" />

					<a href="/auth/password-reset"> Forgot Password? </a>
				</div>
			</Field>
		</div>

		<Button class="jc:center mt:8">
			{#if $delayed}
				<LoaderCircle />
			{:else}
				Sign In
			{/if}
		</Button>
	</form>
</AuthBanner>
