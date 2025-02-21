<template>
<div class="inc-exp-container">
    <div>
        <h4>Income</h4>
        <p id="money-plus" class="money plus">+${{ inc_exp.income.toFixed(2) }}</p>
    </div>
    <div>
        <h4>Expense</h4>
        <p id="money-minus" class="money minus">-${{ inc_exp.expense.toFixed(2) }}</p>
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
watch(prop.modelValue.transactions, () => {
    calculateIncExp(prop.modelValue.transactions);
})
const calculateIncExp = (transactions) => {
    transactions.forEach(transaction => {
        if (transaction.amount > 0) {
            inc_exp.income += transaction.amount;
        } else {
            inc_exp.expense -= transaction.amount;
        }
    });
    console.log(inc_exp);
    
}
onMounted(() => {
    calculateIncExp(prop.modelValue.transactions);
})
</script>

<style scoped>

</style>
