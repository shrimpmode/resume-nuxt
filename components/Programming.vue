<template>
    <div>
        <div class="text-lg font-semibold">
            Technical Skills
        </div>
        
        <div class="ml-4">
            <div class="flex items-center text-lg font-medium">
                <span class="font-sans font-medium mr-2">React </span>
                <ReactIcon />
            </div>
            <div class="flex items-center text-lg font-medium">
                <span class="font-sans font-medium mr-2">Javascript </span>
                <LanguageJavascriptIcon />
            </div>
            <div class="flex items-center text-lg font-medium">
                <span class="font-sans font-medium mr-2">Typescript </span>
                <LanguageTypescriptIcon />
            </div>
            <div class="flex items-center text-lg font-medium">
                <span class="font-sans font-medium mr-2">Python </span>
                <LanguagePythonIcon />
            </div>
            <div class="flex items-center text-lg font-medium">
                <span class="font-sans font-medium mr-2">Git </span>
                <GitIcon />
            </div>
            <div class="flex items-center text-lg font-medium">
                <ul>
                    <li> Django </li>
                    <li> Nuxt </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import ReactIcon from 'vue-material-design-icons/React.vue'
import LanguageJavascriptIcon from 'vue-material-design-icons/LanguageJavascript.vue'
import LanguageTypescriptIcon from 'vue-material-design-icons/LanguageTypescript.vue'
import LanguagePythonIcon from 'vue-material-design-icons/LanguagePython.vue'
import GitIcon from 'vue-material-design-icons/Git.vue'

    import { defineProps } from 'vue'
    const props = defineProps({
        title: String,
        skills: Array
    })
</script>