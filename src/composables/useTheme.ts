import { computed } from 'vue'

export const useTheme = (isDark: () => boolean) => {
  const themeName = computed(() => (isDark() ? 'sk-loader--dark' : ''))
  return { themeName }
}
