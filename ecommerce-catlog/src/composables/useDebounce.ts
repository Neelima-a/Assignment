import { ref, watch, onUnmounted, type Ref } from 'vue';

export function useDebounce<T>(
  source: Ref<T>,
  delay = 300
) {
  const debouncedValue = ref<T>(source.value);

  let timer: ReturnType<typeof setTimeout>;

  watch(source, (newValue) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      debouncedValue.value = newValue;
    }, delay);
  });

  onUnmounted(() => {
    clearTimeout(timer);
  });

  return debouncedValue;
}