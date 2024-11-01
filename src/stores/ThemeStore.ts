import type { ThemeState } from "@/models/ThemeState"
import  { defineStore } from 'pinia';



export const useTemeStore = defineStore({
  id: 'modo', // este es un nombre que le colocamos a la constante para identificarla y que luego se entiende
  state: ():  ThemeState => ({
    isDark: false,
    mode: 'LightMode',
  }),

  actions: {
    toggleDarkmode() {
      this.isDark = !this.isDark //La expresión !this.darkmode usa el operador lógico de negación (!), que invierte el valor de darkmode. Esto significa que si darkmode es true, se convierte en false, y si es false, se convierte en true.
      this.mode = this.isDark ? 'Dark' : 'LightMode' //Aquí, this.darkmode es la condición. Si this.darkmode es true, entonces this.text se asigna el valor "DarkMode". Si this.darkmode es false, this.text se asigna el valor "LightMode".
    },
  },
})
