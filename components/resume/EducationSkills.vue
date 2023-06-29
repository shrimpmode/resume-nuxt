<template>
    <div>
        <div class="text-xl tracking-wider">
            EDUCATION
        </div>

        <div class="mt-4">
            <div>
                <span class="font-bold">
                    Universidad Nacional de Ingenieria
                </span>
                <br />
                Lima, Peru
                <br />
                B.S. Computer Science
            </div>
        </div>
        <div class="mt-4">
            <div class="text-xl tracking-wider">
                SKILLS
            </div>

            <div class="mt-4">
                <div class="text-lg flex gap-1 items-center">
                    <JavascriptIcon /> Javascript
                </div>
                <div class="text-lg flex gap-1 items-center">
                    <Typescript /> Typescript
                </div>
                <div class="text-lg flex gap-1 items-center">
                    <React /> React
                </div>
                <div class="text-lg flex gap-1 items-center">
                    <VueIcon /> Vue
                </div>
                <div class="text-lg flex gap-1 items-center">
                    <PythonIcon /> Python
                </div>
                <div class="text-lg flex gap-1 items-center">
                    <Django /> Django
                </div>
                <div class="text-lg flex gap-1 items-center">
                    <GraphqlIcon /> Graphql
                </div>
                <div class="text-lg flex gap-1 items-center">
                    <Postgresql /> Postgresql
                </div>
            </div>
        </div>

    </div>
</template>

<script lang='ts' setup>

import JavascriptIcon from 'vue-material-design-icons/LanguageJavascript.vue'
import Typescript from 'vue-material-design-icons/LanguageTypescript.vue'
import React from 'vue-material-design-icons/React.vue'
import Django from '~/assets/icons/django.svg'
import Postgresql from '~/assets/icons/postgresql.svg'
import Graphql from 'vue-material-design-icons/Graphql.vue'
import VueIcon from 'vue-material-design-icons/Vuejs.vue'
import PythonIcon from 'vue-material-design-icons/LanguagePython.vue'
import GraphqlIcon from 'vue-material-design-icons/Graphql.vue'

</script>

