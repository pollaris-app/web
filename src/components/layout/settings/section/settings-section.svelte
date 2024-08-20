<script lang="ts" generics="T extends typeof form">
	import { Description, Fieldset, Legend } from 'formsnap';
	import type { SettingsSectionProps } from '.';
	import { Separator } from '$components/layout/separator';

	let { children, form, fieldName, legend }: SettingsSectionProps<T> = $props();
</script>

<section>
	<Separator />

	<Fieldset name={fieldName} {form}>
		<div class="flex gap:32 py:16">
			<div class="flex flex:col min-w:196">
				<Legend class="color:primary f:18 font:semibold">{legend.title}</Legend>
				<Description class="color:neutral">{legend.description}</Description>
			</div>
			{@render children()}
		</div>
	</Fieldset>
</section>
