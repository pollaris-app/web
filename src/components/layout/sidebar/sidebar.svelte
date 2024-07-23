<script lang="ts">
	import { Dialog } from '$components/actions/dialog';
	import { Logo } from '$components/data-display/logo';
	import { cn } from '@kurasu/variants';
	import { Check, Compass, Home, PieChart, type Icon as IconType } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { createTabs, melt } from '@melt-ui/svelte';
	import { Button } from '$components/actions/button';
	import { PAGES, TRIGGERS } from '.';

	const {
		elements: { root, list, content, trigger },
		states: { value }
	} = createTabs({
		defaultValue: 'poll'
	});

	let pathname = $derived($page.url.pathname);

	let dialogOpen = $state(false)
</script>

<!-- {#snippet contentSnippet(id: string)}
	{#if id === 'poll'}
		<div class="flex flex:col gap:16">
			<h1>Tab 1</h1>

			<form>
				<div>
					<label for="name">Name</label>
					<input type="text" id="name" />
				</div>
			</form>
		</div>
	{/if}

	{#if id === 'quiz'}
		<div class="flex flex:col gap:16">
			<div class="flex flex:col gap-y:4">
				<h1 class="font:bold font:24">Tab 2</h1>
				<p class="color:neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>

			<form class="flex flex:col gap-y:8">
				<div class="flex flex:col gap-y:8">
					<label for="name" class="font:semibold f:16 color:neutral-light">Name</label>
					<input
						type="text"
						id="name"
						placeholder="My super nice name"
						class="flex ai:center jc:center p:12 r:16 b:base-300|solid|1"
					/>
				</div>
			</form>
		</div>
	{/if}

	<div class="flex gap-x:8 mt:16 as:end">
		<Button variant="outline" color="error">Cancel</Button>
		<Button>Continue</Button>
	</div>
{/snippet} -->

<div class="flex flex:col min-w:256 gap:32">
	<Logo variant="full" />

	<nav class="flex flex:col gap:16">
		<Dialog title='test' bind:openState={dialogOpen} alertBeforeClose onOutsideClick={(e) => {
			e.preventDefault()

			dialogOpen = false
		}}>
			{#snippet trigger({builder})}
				<Button builders={[builder]}>Test</Button>
			{/snippet}

			test
			

			<!-- {#snippet children()}
				<div class="flex flex:col gap-y:16">
					<div class="w:100% flex gap-x:16">
						{#each TRIGGERS as triggerItem}
							<button
								
								class={cn(
									'rel flex flex:1 flex:col ai:start jc:start text-align:start gap:8 b:base-300|solid|1 r:16 p:16 cursor:pointer',
									{
										'outline:2|solid|base-400 bg:base-300': $value === triggerItem.id
									}
								)}
							>
								<h3 class="font:20 font:bold">{triggerItem.label}</h3>
								<p class="color:neutral w:75%">{triggerItem.description}</p>

								<span
									class={cn(
										'abs flex ai:center jc:center color:base-400 top:16 right:16 w:24 h:24 r:full b:base-300|solid|1',
										{
											'b:base-400 bg:white': $value === triggerItem.id
										}
									)}
								>
									{#if $value === triggerItem.id}
										<Check size={16} strokeWidth={3} />
									{/if}
								</span>
							</button>
						{/each}
					</div>

					{@render contentSnippet($value)}

					<div class="flex gap-x:8 mt:16 as:end">
						<Button variant="outline" color="error">Cancel</Button>
						<Button>Next</Button>
					</div>
				</div>
			{/snippet} -->
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
