<script lang="ts">
	import { Avatar } from '$components/data-display/avatar';
	import { Image } from 'lucide-svelte';
	import type { NewFeedPostProps } from '.';

	let {}: NewFeedPostProps = $props();
</script>

<div class="bg:base-300 r:24 p:16 flex ai:start gap:16 w:100% max-w:576px">
	<Avatar image={{ src: '/me.jpg' }} fallback="Test" />

	<div class="flex flex:col gap:16 w:100%">
		<!-- Input -->
		<div class="h:48 w:100% r:16 flex gap:16 ai:center py:8 px:16 bg:base-200 fg:primary/.4">
			This will be an input later on
		</div>

		<!-- Attachments -->
		<div class="flex gap:8">
			<div
				class="bg:base-200 flex flex:1 gap:8 py:6 px:12 r:12 fg:primary ai:center text:center jc:center"
			>
				<Image class="fg:success" size={20} />

				<span>Media</span>
			</div>
			<div
				class="bg:base-200 flex flex:1 gap:8 py:6 px:12 r:12 fg:primary ai:center text:center jc:center"
			>
				<Image class="fg:info" size={20} />

				<span>Poll</span>
			</div>
			<div
				class="bg:base-200 flex flex:1 gap:8 py:6 px:12 r:12 fg:primary ai:center text:center jc:center"
			>
				<Image class="fg:warning" size={20} />

				<span>Schedule</span>
			</div>
			<div
				class="bg:base-200 flex flex:1 gap:8 py:6 px:12 r:12 fg:primary ai:center text:center jc:center"
			>
				<Image class="fg:error" size={20} />

				<span>Media</span>
			</div>
		</div>
	</div>
</div>
