<template>
    <Base>
        <template #header>
            <div id="experience" class="text-h5 text-sm-h4">
        <span class="blue--text">02.</span>
        {{$t('exp.done')}}
      </div>
        </template>
        <template #content>
            <ExperienceList/>
        </template>
    </Base>
</template>
<script>
import { defineAsyncComponent } from 'vue';

const Base = defineAsyncComponent(() => import('@/sections/Base.vue'));
const ExperienceList = defineAsyncComponent(() => import('@/components/ExperienceList.vue'));

export default {
    name:"Experience",
    components : {
        Base,
        ExperienceList
    }
}
</script>