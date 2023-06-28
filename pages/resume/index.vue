<template>
    <div class="h-screen flex justify-center py-8">
        <div class="w-[840px]">
            <div class="flex justify-between">
                <div class="text-5xl font-mono">
                    <span class="font-light">
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

            <!-- PROFILE  -->
            <div class="mt-10">
                <div class="text-2xl tracking-wider">
                    PROFILE
                </div>
                <div class="text-lg">
                    I've been working as a software engineer for about 5 years. I love building applications and learning
                    new technologies.
                    I am a fast learner, innovative and flexible person. During my career I have worked in Front End, and
                    Back End with technologies
                    such as React, Vue, Django, Postgres, Typescript, Javascript, Python, and more.
                </div>
            </div>

            <!-- GRID -->
            <div class="grid  grid-cols-resume-experience mt-10">
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
                            <div class="text-lg">
                                Javascript
                            </div>
                            <div class="text-lg">
                                Typescript
                            </div>
                            <div class="text-lg">
                                React
                            </div>
                            <div class="text-lg">
                                Vue
                            </div>
                            <div class="text-lg">
                                Python
                            </div>
                            <div class="text-lg">
                                Django
                            </div>
                            <div class="text-lg">
                                Graphql
                            </div>
                            <div class="text-lg">
                                Postgresql
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div class="text-xl tracking-wider">
                        WORK EXPERIENCE
                    </div>

                    <div class="mt-4">

                        <div class="font-semibold">
                            SOFTWARE ENGINEER                         
                        </div>

                        <div>
                            Thoropass, Inc | Fulltime Remote | 2021 - Current
                        </div>
                        <div class="mt-4">
                            <div class="font-semibold">
                                Tasks and responsibilities executed:
                            </div>

                            <ul>
                                <li>
                                    - Develop Back End, and Front End features.
                                </li>
                                <li>
                                    - Perform code reviews.
                                </li>
                                <li>
                                    - Tech Talks.
                                </li>
                                <li>
                                    - Refactor Code.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script lang='ts' setup>

import MailIcon from 'vue-material-design-icons/EmailOutline.vue'
import LinkedInIcon from 'vue-material-design-icons/Linkedin.vue'
import LocationIcon from 'vue-material-design-icons/MapMarker.vue'
import GitHubIcon from 'vue-material-design-icons/Github.vue'
</script>
