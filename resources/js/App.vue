<template>
<div class="contain">

  <span class="flex justify-between">
    <Balance v-model="data" />
    <button @click="cleatTransactions()" class="text-black border  border-white rounded-full p-4"> ✕</button>
  </span>
    <IncomeExpense v-model="data" />
    <div>
        <span >
            <h3 v-if="showModal">Add transaction</h3>
            <span v-else class="flex justify-between">
                <h3 >History</h3>
             <button type="button" @click="showModal = true"  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Transaction</button>
            </span>

        </span>
        <TransactionList :data="data"  v-show="!showModal" />
        <AddTransaction v-model="data" v-show="showModal"/>
    </div>

</div>
</template>

<script setup>
import Balance from './components/Balance.vue';
import IncomeExpense from './components/IncomeExpense.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';
import {
    onBeforeMount,
    ref,
    watch
} from 'vue';
let showModal = ref(false);
let data = ref({
    transactions: []
});
const cleatTransactions = () => {
    data.value.transactions = [];
};
watch(data.value, (newValue) => {
    localStorage.setItem('transactions', JSON.stringify(newValue.transactions));
    showModal.value = false;
});
onBeforeMount(() => {
    let localStorageData = JSON.parse(localStorage.getItem('transactions'));
    if (localStorageData.length > 0) {
        data.value.transactions = localStorageData;
    }
    
});
</script>

<style scoped>

</style>
