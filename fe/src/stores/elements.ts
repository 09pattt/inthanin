import { defineStore } from 'pinia'

export const useElementsStore = defineStore('elements', {
    state: () => ({
        MainPage: null,
        Navbar: null
    })
})