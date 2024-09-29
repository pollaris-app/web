<script lang="ts">
	import { Button } from '$components/actions/button';
	import * as Dropdown from '$components/actions/dropdown';
	import { Avatar } from '$components/data-display/avatar';
	import { Logo } from '$components/data-display/logo';
	import { CircleHelp, Layers, LogOut, Settings, UserRound } from 'lucide-svelte';
</script>

{#snippet avatar()}
	<Avatar image={{ src: 'https://i.imgur.com/8tPmy2V.png' }} fallback="TEST" size="small" />
{/snippet}

<header class="sticky top:0 p:16 flex jc:space-between ai:center h:64 bg:base-100 z:50">
	<Logo variant="full" />

	<Dropdown.Root class="mt:auto">
		{#snippet trigger({ builder })}
			<Button builders={[builder]} variant="ghost" color="base-300" class="p:0! r:100%!">
				{@render avatar()}
			</Button>
		{/snippet}

		{#snippet children()}
			<Dropdown.Group class="flex:row! gap:16 p:12!">
				{@render avatar()}

				<div class="flex flex:col">
					<b class="color:white">John Doe</b>
					<span class="color:neutral">john.doe@domain.com</span>
				</div>
			</Dropdown.Group>

			<Dropdown.Separator />
			<Dropdown.Group>
				<Dropdown.Item>
					<UserRound size={16} />
					View Profile
				</Dropdown.Item>

				<Dropdown.Item>
					<Settings size={16} />
					Settings
				</Dropdown.Item>
			</Dropdown.Group>

			<Dropdown.Separator />
			<Dropdown.Group>
				<Dropdown.Item>
					<Layers size={16} />
					Changelog
				</Dropdown.Item>

				<Dropdown.Item>
					<CircleHelp size={16} />
					Support
				</Dropdown.Item>
			</Dropdown.Group>

			<Dropdown.Separator />
			<Dropdown.Group>
				<Dropdown.Item class="bg:error/.10!:hover color:error!:hover">
					<LogOut size={16} />
					Log Out
				</Dropdown.Item>
			</Dropdown.Group>
		{/snippet}
	</Dropdown.Root>
</header>
