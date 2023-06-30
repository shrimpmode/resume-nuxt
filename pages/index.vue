<template>
    <div class="h-screen flex justify-center py-8">
        <div class="w-[960px] p-8">
            <ResumeInfo /> 
            <ResumeProfile />

            <div class="md:grid grid-cols-resume-experience gap-x-4 py-10">
                <ResumeEducationSkills />
                <ResumeExperience />
            </div>
        </div>
    </div>
</template>

