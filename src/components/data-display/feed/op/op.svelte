<script lang="ts">
	import { Avatar } from '$components/data-display/avatar';
	import type { OpProps } from '.';

	let { user, date }: OpProps = $props();
</script>

<div class="flex ai:center gap:16">
	<Avatar image={{ ...user.avatar }} fallback="TEST" />

	<div class="flex flex:col gap:4">
		<span class="fg:neutral">@{user.username}</span>

		<div class="flex ai:center gap:12">
			<span class="fg:white f:bold f:20">
				{user.displayName}
			</span>

			<span class="w:4 h:4 bg:accent r:full"></span>

			<time class="fg:accent f:14 h:100%">
				{date}
			</time>
		</div>
	</div>
</div>
