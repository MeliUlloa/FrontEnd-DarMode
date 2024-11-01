import type { ThemeState } from "@/models/ThemeState"
import  { defineStore } from 'pinia';

export const useThemeStore = defineStore({
  id: 'modo',
  state: ():  ThemeState => ({
    isDark: false,
    mode: 'LightMode',
  }),

  actions: {
    toggleDarkmode() {
      this.isDark = !this.isDark
      this.mode = this.isDark ? 'Dark' : 'LightMode'
    },
  },
})
