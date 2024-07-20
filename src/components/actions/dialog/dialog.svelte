<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import type { DialogProps } from '.';
	import Button from '../button/button.svelte';
	import { Info, Plus, X } from 'lucide-svelte';

	const {
		elements: { trigger, portalled, overlay, content, title, description, close },
		states: { open }
	} = createDialog();

	let { children, triggerContent, class: className }: DialogProps = $props();
</script>

<Button element={trigger} icon={Plus}>
	{@render triggerContent()}
</Button>

{#if $open}
	<div use:melt={$portalled} de class="abs top:0 left:0 w:100dvw h:100dvh">
		<div
			use:melt={$overlay}
			class="abs z:10 top:0 left:0 bg:base-50/.5 bd:blur(4) w:100% h:100%"
		></div>

		<div
			use:melt={$content}
			class="abs z:20 top:50% left:50% transform:center translate(-50%,-50%) w:576 h:max-content bg:base-200 b:2|base-300|solid p:16 r:32 flex flex:col gap:32"
		>
			<div class="flex flex:col gap:16">
				<div class="flex justify-content:start align-items:center gap-x:16">
					<div class="flex jc:center ai:center color:info w:48 h:48 r:full bg:info/.15">
						<Info size={24} />
					</div>

					<h2 use:melt={$title} class="font:24 font:semibold color:white">Hyper nice title</h2>

					<button
						use:melt={$close}
						class="cursor:pointer flex p:8 r:full bg:red/.1:hover fg:neutral color:hsl(344,78%,45%):hover ml:auto"
					>
						<X size={24} />
					</button>
				</div>

				<div class="flex flex:col gap-y:8">
					<p use:melt={$description} class="font:18 color:neutral">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, minus nesciunt.
						Cumque non illo eos quibusdam nobis sequi eveniet asperiores.
					</p>
				</div>
			</div>

			<div class="flex flex:col gap-y:16 color:white">
				{#if children}
					{@render children()}
				{/if}
			</div>
		</div>
	</div>
{/if}
