<template>
    <div class="flex justify-between flex-wrap">
        <div class="text-4xl font-mono mb-4 md:mb-0">
            <span>
                Julio Cesar
            </span>
            <br />
            Silva
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex gap-1">
                <MailIcon />
                <span>
                    jsilva@uni.pe
                </span>
            </div>
            <div class="flex gap-2">
                <LinkedInIcon />
                <span>https://www.linkedin.com/in/juliocsil444/
                </span>
            </div>
            <div class="flex gap-2">
                <LocationIcon />
                <span>Lima, Peru
                </span>
            </div>
            <div class="flex gap-2">
                <GitHubIcon />
                <span> https://github.com/almarcesiblelu
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import MailIcon from 'vue-material-design-icons/EmailOutline.vue'
import LinkedInIcon from 'vue-material-design-icons/Linkedin.vue'
import LocationIcon from 'vue-material-design-icons/MapMarker.vue'
import GitHubIcon from 'vue-material-design-icons/Github.vue'

</script>
