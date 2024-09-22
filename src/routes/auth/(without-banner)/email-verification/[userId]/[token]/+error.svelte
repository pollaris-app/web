<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$components/actions/button';
	import { ErrorCard } from '$components/layout/error-card';
</script>

<ErrorCard title={String($page.status)} description={$page.error?.message ?? ''}>
	<a href="/auth/signin"><Button>Go back</Button></a>
</ErrorCard>
