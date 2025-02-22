<template>
    <div>
    
      <form @submit.prevent="submit()">
        <div class="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            id="text"
            v-model="form.text"
            placeholder="Enter text..."
            required
          />
        </div>
        <div class="form-control">
          <label for="amount">Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            v-model="form.amount"
            placeholder="Enter amount..."
            required
          />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive, defineProps } from 'vue';
  
  const prop = defineProps(['modelValue']);
  const form = reactive({
    id: '',
    text: '',
    amount: ''
  });
  
  const submit = () => {
    if (!form.text || !form.amount) {
      alert('Please fill in both fields.');
      return;
    }
    form.id = Date.now(); 
  
    prop.modelValue.transactions.unshift({ ...form });
    form.text = '';
    form.amount = '';
  };
  </script>
  