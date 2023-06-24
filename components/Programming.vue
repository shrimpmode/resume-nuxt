<template>
    <div class="h-screen p-16">
        <div class="md:text-3xl font-semibold text-center">
            Technical Skills
        </div>
        
        <div class="ml-4 py-8 flex justify-center gap-8">
            <div class="flex items-center flex-col text-lg font-medium" v-for="skill in skills" :key="skill.name">
                <div>
                    <component :is="skill.icon" :size="64" :fillColor="'#ff8766'" />
                </div>
                <div class="font-sans font-medium mr-2">{{skill.name}} </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ReactIcon from 'vue-material-design-icons/React.vue'
import LanguageJavascriptIcon from 'vue-material-design-icons/LanguageJavascript.vue'
import LanguageTypescriptIcon from 'vue-material-design-icons/LanguageTypescript.vue'
import LanguagePythonIcon from 'vue-material-design-icons/LanguagePython.vue'
import GitIcon from 'vue-material-design-icons/Git.vue'
import NuxtIcon from 'vue-material-design-icons/Nuxt.vue'

    import { defineProps } from 'vue'
    const props = defineProps({
        title: String,
        skills: Array
    })

    const skills = [
        {
            name: 'React',
            icon: ReactIcon
        },
        {
            name: 'Javascript',
            icon: LanguageJavascriptIcon
        },
        {
            name: 'Typescript',
            icon: LanguageTypescriptIcon
        },
        {
            name: 'Python',
            icon: LanguagePythonIcon
        },
        {
            name: 'Git',
            icon: GitIcon
        },
        {
            name: 'Nuxt',
            icon: NuxtIcon
        }
    ]
</script>