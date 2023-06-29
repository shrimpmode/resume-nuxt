<template>
    <div class="h-screen flex justify-center py-8">
        <div class="w-[840px]">
            <ResumeInfo /> 
            <ResumeProfile />

            <div class="grid grid-cols-resume-experience gap-x-4 mt-10">
                <ResumeEducationSkills />
                <ResumeExperience />
            </div>
        </div>
    </div>
</template>

