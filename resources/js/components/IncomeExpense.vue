<template>
<div class="inc-exp-container">
    <div>
        <h4>Income</h4>
        <p id="money-plus" class="money plus">+${{ inc_exp.income }}</p>
    </div>
    <div>
        <h4>Expense</h4>
        <p id="money-minus" class="money minus">-${{ inc_exp.expense }}</p>
    </div>
</div>
</template>

<script setup>
import {
    onMounted,
    reactive,
    watch
} from 'vue';

let inc_exp = reactive({
    income: 0,
    expense: 0
});
let prop = defineProps(['modelValue']);

const calculateIncExp = (transactions) => {
    inc_exp.income = transactions
        .filter(item => item.amount > 0)
        .reduce((acc, item) => (acc += item.amount), 0)
        .toFixed(2);
    inc_exp.expense = transactions
        .filter(item => item.amount < 0)
        .reduce((acc, item) => (acc += item.amount), 0)
        .toFixed(2);
}
onMounted(() => {
    calculateIncExp(prop.modelValue.transactions);
});
watch(prop.modelValue.transactions, () => {
    calculateIncExp(prop.modelValue.transactions);
});
</script>

<style scoped>

</style>
