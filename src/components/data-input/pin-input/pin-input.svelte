<script lang="ts">
	import { PinInput } from 'bits-ui';
	import type { PinInputProps } from '.';
	import { Control } from 'formsnap';

	let { data = $bindable(), quantity }: PinInputProps = $props();

	$effect(() => {
		console.log(data);
	});
</script>

<!-- TODO: Create a class for often used objects like a button, input, etc. -->
{#snippet input()}
	<PinInput.Input
		class="flex ai:center jc:center text:center font:18 p:8 b:2|solid|base-400 r:16 h:48 w:48 color:neutral"
	/>
{/snippet}

<Control let:attrs>
	<PinInput.Root
		class="flex gap:8"
		onValueChange={(e) => {
			data = e?.join('') ?? '';
		}}
	>
		{#each Array(quantity).fill(0) as _, index}
			{@render input()}
		{/each}

		<PinInput.HiddenInput bind:value={data} {...attrs} />
	</PinInput.Root>
</Control>
