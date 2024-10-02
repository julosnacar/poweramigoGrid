<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const { authenticated,grid3 } = storeToRefs(useAuthStore());
const picked = ref({group:''})

watch( 
    picked, (newValue) => 
    {
        if (authenticated.value) {
            console.log(grid3)
        }
    }
)
</script>

<template>
    <div v-if="authenticated" class="card-header">
        <h4>Energy balance</h4>
        <input type="radio" id="day" value="Diary" v-model="picked" />
        <label for="day">Diary</label>
        <input type="radio" id="month" value="Monthly" v-model="picked " />
        <label for="month">Monthly</label>
        <input type="radio" id="year" value="Annual" v-model="picked" />
        <label for="year">Annual</label>
    </div>
</template>