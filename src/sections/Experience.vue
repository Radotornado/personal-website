<template>
    <Base>
        <template #header>
            <div id="experience" class="text-h5 text-sm-h4">
        <span class="blue--text">02.</span>
        What I have done
      </div>
        </template>
        <template #content>
            <ExperienceList/>
        </template>
    </Base>
</template>
<script>
const Base = () => import('@/sections/Base.vue');
const ExperienceList = () => import('@/components/ExperienceList.vue');

export default {
    name:"Experience",
    components : {
        Base,
        ExperienceList
    }
}
</script>