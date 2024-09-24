<script lang="ts">
	import { EllipsisVertical } from 'lucide-svelte';
	import type { FeedPostProps } from '.';
	import { Op } from '../op';
	import { Separator } from '$components/layout/separator';
	import { Heart, MessageCircleMore, Send, Paperclip, Image } from 'lucide-svelte';
	import { Button } from '$components/actions/button';
	import { Avatar } from '$components/data-display/avatar';

	let { content }: FeedPostProps = $props();
</script>

<div class="flex flex:col bg:base-300 p:16 r:24 gap:16 w:100% h:max-content">
	<header class="flex jc:space-between">
		<Op
			user={{
				username: 'test',
				displayName: 'Test',
				avatar: {
					src: 'https://i.imgur.com/8tPmy2V.png'
				}
			}}
			date="1 hour ago"
		/>

		<div
			class="fg:primary bg:base-400:hover w:48 h:48 r:full text:center flex jc:center ai:center cursor:pointer"
		>
			<EllipsisVertical />
		</div>
	</header>

	<main class="w:100% flex flex:col gap:16">
		<article class="fg:primary ls:0.25">
			{content}
		</article>

		<picture class="w:100%">
			<img src="/me.jpg" alt="content" class="w:100% max-h:min(50dvh,512px) obj:cover r:16" />
		</picture>
	</main>

	<footer class="flex flex:col gap:16">
		<div class="flex ai:center fg:neutral gap:24">
			<Heart class="fg:error fill:error" />
			<MessageCircleMore />
			<Send />

			<!-- If action then a button  -->

			<Button size="small" class="ml:auto">Action</Button>
		</div>

		<Separator />

		<div class="flex ai:center gap:16">
			<Avatar image={{ src: '/me.jpg' }} fallback="TEST" />

			<div class="h:48 w:100% r:16 flex gap:16 ai:center py:8 px:16 bg:base-200 fg:primary/.25">
				<span>This will be an input later on</span>

				<Paperclip class="ml:auto" />
				<Image />
			</div>
		</div>
	</footer>
</div>
