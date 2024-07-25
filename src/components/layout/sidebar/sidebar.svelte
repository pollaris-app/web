<script lang="ts">
	import { Dialog } from '$components/actions/dialog';
	import { DialogTabs } from '$components/actions/dialog/tabs'
	import { Logo } from '$components/data-display/logo';
	import { cn } from '@kurasu/variants';
	import { Check, Compass, Home, PieChart, type Icon as IconType } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { Button } from '$components/actions/button';
	import { PAGES, CHOICES } from '.';
	import { ChoiceGroup } from '$components/data-input/choice-group';

	let pathname = $derived($page.url.pathname);

	let dialogOpen = $state(false)
	let activeDialogChoice = $state(CHOICES[0].value)
</script>

<div class="flex flex:col min-w:256 gap:32">
	<Logo variant="full" />

	<nav class="flex flex:col gap:16">
		<Dialog
			bind:openState={dialogOpen}
			title='Create something new'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae libero bibendum leo imperdiet imperdiet convallis a lacus. Donec fringilla volutpat nunc et sollicitudin.'
			alertBeforeClose
			closeOnEvents
		>
			{#snippet trigger({builder})}
				<Button builders={[builder]}>Create New</Button>
			{/snippet}

			<div class="flex flex:col gap-y:16">
				<form
					onsubmit={(e) => {
						e.preventDefault()
						console.log('submitted')
					}}
					class='flex flex:col gap:16 w:100%'
				>
					<div class="flex flex:col gap:4 w:100%">
						<label for="title" class='font:16 font:semibold'>Title</label>
						<input id='title' type="text" class='flex px:16 py:12 r:16 b:base-300|solid|1 color:neutral::placeholder' placeholder='Title'>
					</div>

					<ChoiceGroup choices={CHOICES} bind:value={activeDialogChoice} />

					<!-- <DialogTabs triggers={TRIGGERS} bind:active={dialogActiveTab}> -->
					<!-- </DialogTabs> -->

					<Button type='submit' size='small' class='as:end w:max-content'>
						Next
					</Button>
				</form>

				
			</div>
		</Dialog>

		<ul class="flex flex:col gap:8">
			{#each PAGES as page}
				<li>
					<a
						href={page.path}
						class={cn(
							'flex ai:center gap:8 p:16 r:16 bg:base-300:hover w:100% color:neutral color:white:hover font:semibold letter-spacing:0.5',
							{
								'bg:base-300': page.path === pathname
							}
						)}
					>
						{#snippet icon(Icon: typeof IconType)}
							<Icon size={20} />
						{/snippet}

						{@render icon(page.icon)}
						<span>
							{page.name}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<nav class="flex flex:col gap:8 mt:auto">
		<ul>
			<li>
				<a
					href="/settings"
					class="flex gap:8 p:16 r:16 bg:base-200:hover w:100% color:gray font:semibold letter-spacing:0.5"
					>Settings</a
				>
			</li>
			<li>
				<a
					href="/settings"
					class="flex gap:8 p:16 r:16 bg:base-200:hover w:100% color:gray font:semibold letter-spacing:0.5"
					>Log Out</a
				>
			</li>
		</ul>
	</nav>
</div>
