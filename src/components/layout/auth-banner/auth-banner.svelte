<script lang="ts">
	import type { AuthBannerProps } from '.';

	let { children, title, description, header }: AuthBannerProps = $props();
</script>

<div class="flex:2">
	<img src="/me.jpg" alt="test" class="r:32 w:100% h:100% object-fit:cover" />
</div>

<div class="flex:3 flex flex:col">
	<div class="flex jc:space-between ai:center">
		<span class="f:32 f:extrabold">LOGO</span>

		<div class="ls:0.25">
			<span>{header.question}</span>
			<a href={header.action.href} class="fg:primary:hover text:underline:hover"
				>{header.action.label}</a
			>
		</div>
	</div>

	<div class="flex flex:col gap:32 px:128 my:auto">
		<div class="flex flex:col gap:8">
			<h1 class="fg:primary font:40 font:bold">{title}</h1>
			<p class="font:20">
				{description}
			</p>
		</div>

		{@render children()}
	</div>
</div>
