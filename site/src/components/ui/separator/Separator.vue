<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { Separator, type SeparatorProps } from "radix-vue";
import { cn } from "~/utils/shadcn";

const props = defineProps<SeparatorProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="
      cn(
        'shrink-0 bg-border',
        props.orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full',
        props.class
      )
    "
  />
</template>
