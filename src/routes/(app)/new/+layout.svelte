<script lang="ts">
	let { children, data } = $props();
</script>

<h1>{data.name}</h1>

{@render children()}
