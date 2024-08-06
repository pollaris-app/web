<script lang="ts">
	import { Button } from '$components/actions/button';
	import * as Dropdown from '$components/actions/dropdown';
	import { Avatar } from '$components/data-display/avatar';
	import { Logo } from '$components/data-display/logo';
</script>

<header class="flex jc:space-between ai:center h:32">
	<Logo variant="full" />

	<Dropdown.Root class="mt:auto">
		{#snippet trigger({ builder })}
			<Button builders={[builder]} variant="ghost" color="neutral" class="p:0! r:100%!">
				<Avatar image={{ src: 'https://i.imgur.com/8tPmy2V.png' }} fallback="TEST" />
			</Button>
		{/snippet}

		{#snippet children()}
			<Dropdown.Item>test</Dropdown.Item>
		{/snippet}
	</Dropdown.Root>
</header>
