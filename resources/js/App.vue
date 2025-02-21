<template>
<div class="container">

    <Balance v-model="data"/>
    <IncomeExpense v-model="data"/>
    <TransactionList :data="data"/>
    <AddTransaction v-model="data"/>

</div>
</template>

<script setup>
import Balance from './components/Balance.vue';
import IncomeExpense from './components/IncomeExpense.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';
import {
    ref
} from 'vue';

let data = ref({
    transactions: [
        {
            id: 1,
            text: 'Flower',
            amount: 19.99
        },
    ]
})

</script>

<style scoped>

</style>
