<script lang="ts">
	import { Dialog } from '$components/actions/dialog';
	import { Logo } from '$components/data-display/logo';
	import { cn } from '@kurasu/variants';
	import { page } from '$app/stores';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { Button } from '$components/actions/button';
	import { PAGES, CHOICES, type SidebarProps } from '.';
	import { ChoiceGroup } from '$components/data-input/choice-group';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { LogOut, Plus, Settings, type Icon as IconType } from 'lucide-svelte';
	import { CreateNewDialogSchema } from '$lib/validation/schemas';
	import { Control, Field, Label, Description, FieldErrors, Fieldset, Legend } from 'formsnap';
	import * as Dropdown from '$components/actions/dropdown';
	import { Tooltip } from '$components/data-display/tooltip';
	import { type Builder } from 'bits-ui';

	let { data }: SidebarProps = $props();

	let pathname = $derived($page.url.pathname);
	let dialogOpen = $state(false);

	const form = superForm(data.form, {
		validators: valibotClient(CreateNewDialogSchema)
	});

	const { form: formData, enhance } = form;
</script>

<div class="flex flex:col gap:32 h:calc(100dvh-80) sticky top:80 p:16">
	<nav class="flex flex:col gap:16 h:100%">
		<Dialog
			bind:openState={dialogOpen}
			title="Create something new"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae libero bibendum leo imperdiet imperdiet convallis a lacus. Donec fringilla volutpat nunc et sollicitudin."
			alertBeforeClose
			closeOnEvents
		>
			{#snippet trigger({ builder: dialogBuilder })}
				<Tooltip openDelay={0} content={{ side: 'right', sideOffset: 8 }}>
					{#snippet trigger({ builder: tooltipBuilder })}
						<Button builders={[tooltipBuilder, dialogBuilder]} class="h:52 w:52">
							<Plus size={20} />
						</Button>
					{/snippet}

					{#snippet children()}
						Create new
					{/snippet}
				</Tooltip>
			{/snippet}

			<div class="flex flex:col gap-y:16 mt:auto">
				<form method="POST" action="/dashboard" use:enhance class="flex flex:col gap:16 w:100%">
					<Field {form} name="title">
						<Control let:attrs>
							<div class="flex flex:col gap:6 w:100%">
								<Label>Title</Label>
								<input
									{...attrs}
									type="text"
									bind:value={$formData.title}
									class="flex px:16 py:12 r:16 b:base-300|solid|1 color:neutral::placeholder"
									placeholder="Title"
								/>
								<FieldErrors />
							</div>
						</Control>
					</Field>
					<Fieldset {form} name="type">
						<div class="flex flex:col gap:6 w:100%">
							<Legend>Select the type of content you want to create:</Legend>
							<ChoiceGroup
								id="type"
								bind:value={$formData.type}
								choices={CHOICES}
								orientation="horizontal"
							/>
							<FieldErrors />
						</div>
					</Fieldset>
					<Button type="submit" size="small" class="as:end w:max-content">Next</Button>
				</form>
				<SuperDebug data={$formData} />
			</div>
		</Dialog>

		<ul class="flex flex:col gap:8">
			{#each PAGES as page}
				<li>
					<Tooltip openDelay={0} content={{ side: 'right', sideOffset: 8 }}>
						{#snippet trigger({ builder })}
							<a
								href={page.path}
								class={cn(
									'flex ai:center jc:center gap:8 p:16 r:16 bg:base-300:hover w:100% color:neutral color:white:hover font:semibold letter-spacing:0.5',
									{
										'bg:base-300': page.path === pathname
									}
								)}
								use:builder.action
								{...builder}
							>
								{#snippet icon(Icon: typeof IconType)}
									<Icon size={20} />
								{/snippet}

								{@render icon(page.icon)}
							</a>
						{/snippet}

						{#snippet children()}
							{page.name}
						{/snippet}
					</Tooltip>
				</li>
			{/each}
		</ul>

		<ul class="mt:auto flex flex:col">
			<li>
				<Tooltip openDelay={0} content={{ side: 'right', sideOffset: 8 }}>
					{#snippet trigger({ builder })}
						{@const href = '/dashboard/settings'}

						<a
							{href}
							class={cn(
								'flex ai:center jc:center gap:8 p:16 r:16 bg:base-300:hover w:100% color:neutral color:white:hover font:semibold letter-spacing:0.5',
								{
									'bg:base-300': href === pathname
								}
							)}
							use:builder.action
							{...builder}
						>
							{#snippet icon(Icon: typeof IconType)}
								<Icon size={20} />
							{/snippet}

							{@render icon(Settings)}
						</a>
					{/snippet}

					{#snippet children()}
						<div>Settings</div>
					{/snippet}
				</Tooltip>
			</li>
		</ul>
	</nav>
</div>
