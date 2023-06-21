<template>
    <div class="h-full  golden-grid">
        <div class="bg-orange-50">
            8
        </div>
        <div class=" golden-grid2 h-full">
            <div class="bg-pink-50">
                3
            </div>

            <div class="bg-gray-50">
                5
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .golden-grid {
        display: grid;
        grid-template-rows: 8fr 5fr;
    }

    .golden-grid2 {
        display: grid;
        /* grid-template-rows: 2fr 3fr; */
        grid-template-columns: 3fr 5fr;
    }
</style>
