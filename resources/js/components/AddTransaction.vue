<template>
<div>
    <h3>Add new transaction</h3>
    <form @submit.prevent="submit()" >
        <div class="form-control">
            <label for="text">Text</label>
            <input type="text" id="text" v-model="form.text" placeholder="Enter text..."  required/>
        </div>
        <div class="form-control">
            <label for="amount">Amount <br />
                (negative - expense, positive - income)</label>
            <input type="number" id="amount" v-model="form.amount" placeholder="Enter amount..."  required/>
        </div>
        <button class="btn">Add transaction</button>
    </form>
</div>
</template>

<script setup>
import Form from 'vform'
import { ref } from 'vue';
let prop = defineProps(['modelValue']);
const form = ref(
    new Form({
        id: '',
        text: '',
        amount: ''
    })
)

const submit = () => {
    prop.modelValue.transactions.unshift(form.value);
  // Reset the amount field
}
</script>


