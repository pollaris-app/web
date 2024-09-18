<script lang="ts">
	import { Control, Description, FieldErrors, Label } from 'formsnap';
	import type { PasswordInputProps } from '.';
	import { Toggle, Progress } from 'bits-ui';
	import { Eye, EyeOff } from 'lucide-svelte';
	import * as v from 'valibot';
	import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core';
	import { cn } from '@kurasu/variants';

	let {
		data = $bindable(''),
		scoreBar,
		placeholder,
		label,
		description,
		unlocked = false,
		...props
	}: PasswordInputProps = $props();

	const countValidPasswordStrengthChecks = (password: string) => {
		const result = zxcvbn(password).score;

		return result;
	};

	let score = $state(0);
	let scoreColor = $derived.by(() => {
		let color = '';

		if (score === 1) color = 'bg:error!';
		if (score === 2) color = 'bg:orange!';
		if (score === 3) color = 'bg:warning!';
		if (score === 4) color = 'bg:success!';

		return color;
	});

	$effect(() => {
		if (scoreBar) {
			score = countValidPasswordStrengthChecks(data);
		}
	});
</script>

<Control let:attrs>
	<div class="flex flex:col gap:4">
		{#if label}
			<Label class="f:18">
				{label}
			</Label>
		{/if}

		<div class="rel">
			<input
				bind:value={data}
				placeholder={placeholder ?? 'Enter your password'}
				type={unlocked ? 'text' : 'password'}
				class="flex ai:center jc:space-between w:100% font:18 py:8 pl:12 pr:40 b:2|solid|base-400 r:16 h:48 color:neutral"
				{...props}
				{...attrs}
			/>

			<Toggle.Root bind:pressed={unlocked} class="abs right:12 top:14 cursor:pointer">
				{#if unlocked}
					<EyeOff size={20} />
				{:else}
					<Eye size={20} />
				{/if}
			</Toggle.Root>
		</div>

		{#if scoreBar}
			<div class="flex gap:8 w:100% mt:4">
				{#each { length: 4 } as _, i}
					<div class="rel h:8 w:100% overflow:hidden rounded">
						<div
							class={cn('h:100% w:100% flex:1 rounded bg:base-200', {
								[`${scoreColor}`]: i < score
							})}
						></div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</Control>

{#if description}
	<Description>
		{description}
	</Description>
{/if}

<FieldErrors class="fg:error mt:4" />
