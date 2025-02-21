<template>
<div>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="transaction in prop.data.transactions" :key="transaction.id" :class="transaction.amount > 0 ? 'plus' : 'minus'">
          {{ transaction.text }} <span>{{ transaction.amount }}</span><button class="delete-btn">x</button>
    </li>
    </ul>
</div>
</template>

<script setup>
import { onMounted } from 'vue';

let prop = defineProps(['data']);
 


</script>

<style scoped>

</style>
