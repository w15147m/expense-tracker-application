<template>
<div>
    <h4>Your Balance</h4>
    <h1 id="balance">${{ balance.toFixed(2) }}</h1>
</div>
</template>

<script setup>
import {
    onMounted,
    ref,
    watch
} from 'vue';

let prop = defineProps(['modelValue']);
let balance = ref(0);
onMounted(() => {
    calculateBalance(prop.modelValue.transactions);
});
watch(prop.modelValue.transactions, () => {
    calculateBalance(prop.modelValue.transactions);
});
const calculateBalance = (transactions) => {
    balance.value = transactions.reduce((acc, item) => (acc += item.amount), 0);
}
</script>
