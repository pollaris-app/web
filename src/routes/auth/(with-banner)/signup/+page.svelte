<script lang="ts">
	import { signUpSchema } from '$lib/zod/schemas/auth/signup';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { Field } from 'formsnap';
	import { TextInput } from '$components/data-input/text-input';
	import { Button } from '$components/actions/button';
	import { addToast } from '$components/data-display/toaster/toaster.svelte';
	import { PasswordInput } from '$components/data-input/password-input';
	import { Checkbox } from '$components/data-input/checkbox';
	import { addPopout } from '$components/data-display/popouter/popouter.svelte';
	import { LoaderCircle } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { AuthBanner } from '$components/layout/auth-banner';

	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const form = superForm(data.form, {
		validators: valibotClient(signUpSchema),
		onResult: async ({ result }) => {
			if (result.type === 'success') {
				addPopout({
					data: {
						title: 'Success',
						description: 'You will be redirected soon...',
						status: 'success',
						actions: [
							{
								label: 'Redirect Now',
								handler: () => {
									goto(
										`/auth/email-verification/${result.data?.form.message.data.userId}/${result.data?.form.message.data.token}`
									);
								}
							}
						],
						onClose: () => {
							goto(
								`/auth/email-verification/${result.data?.form.message.data.userId}/${result.data?.form.message.data.token}`
							);
						}
					},
					type: 'foreground',
					closeDelay: 3000
				});
			}

			if (result.type === 'failure') {
				addToast({
					data: {
						title: await result.data?.form.message.name,
						description: await result.data?.form.message.message,
						status: 'error'
					}
				});
			}
		},
		onError: ({ result }) => {
			console.error(result);
		},
		delayMs: 500,
		timeoutMs: 5000
	});

	const { form: formData, enhance, errors, allErrors, message, delayed, timeout } = form;

	const { title, description, header } = data.page;
</script>

<AuthBanner {title} {description} {header}>
	<form method="POST" use:enhance class="flex flex:col gap:8">
		<Field {form} name="email">
			<TextInput bind:data={$formData.email} label="Email" placeholder="john@doe.com" />
		</Field>

		<Field {form} name="password">
			<PasswordInput bind:data={$formData.password} scoreBar label="Password" />
		</Field>

		<Field {form} name="confirmPassword">
			<PasswordInput
				bind:data={$formData.confirmPassword}
				label="Confirm Password"
				placeholder="Please confirm the password"
			/>
		</Field>

		<Field {form} name="agreement">
			<Checkbox
				bind:checked={$formData.agreement}
				label="Yes I understand and agree to the Quizzly Terms of Service"
			/>
		</Field>

		<Button type="submit" disabled={$allErrors.length > 0} class="w:100% jc:center">
			{#if $delayed}
				<LoaderCircle class="@rotate|1s|infinite|ease-in-out" />
			{:else}
				Sign Up
			{/if}
		</Button>
	</form>

	<div
		class={`flex ai:center gap:8 fg:neutral {content:"";flex;ai:center;h:1;w:100%;bg:secondary}::before {content:"";flex;ai:center;h:1;w:100%;bg:secondary}::after `}
	>
		OR
	</div>

	<div class="flex gap:8">
		<Button color="base-300" class="jc:center flex:1" disabled>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="24"
				height="24"
				viewBox="0 0 48 48"
			>
				<path
					fill="#fbc02d"
					d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
				></path><path
					fill="#e53935"
					d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
				></path><path
					fill="#4caf50"
					d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
				></path><path
					fill="#1565c0"
					d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
				></path>
			</svg>

			Signup with Google
		</Button>

		<Button color="base-300" class="jc:center flex:1" disabled>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="24"
				height="24"
				viewBox="0 0 50 50"
				class="fill:primary@dark"
			>
				<path
					d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
				></path>
			</svg>

			Signup with X
		</Button>
	</div>

	<SuperDebug data={{ $formData, $errors, $message }} />
</AuthBanner>
