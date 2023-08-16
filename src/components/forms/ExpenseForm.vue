<template>
  <div class="form-container">
    <h3>Add New Transaction</h3>
    <form @submit.prevent="addExpense">
      <div>
        <label>Text</label>
        <input v-model="title" type="text" placeholder="Enter name" />
      </div>
      <div>
        <label>Amount</label>
        <input v-model="price" type="number" placeholder="Enter price" />
      </div>
      <button class="add-btn" type="submit">Add Transaction</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ExpenseForm",
  props: {
    expenses: Array,
  },

  data() {
    return {
      title: "",
      price: "",
    };
  },

  methods: {
    addExpense() {
      if (this.title && this.price) {
        const newExpense = {
          id: crypto.randomUUID(),
          title: this.title,
          price: this.price,
        };
        this.$emit("new-expense", newExpense); // Emit a custom event
        this.resetFields();
      }
    },
    resetFields() {
      this.price = "";
      this.title = "";
    },
  },
};
</script>
<style>
.form-container {
  margin: 50px 0;
}

.form-container h3 {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  font-weight: 500;
}

input {
  border: 1px solid #ccc;
  width: 100%;
  padding: 13px 10px;
  display: block;
  margin-top: 5px;
  border-radius: 5px;
  outline: none;
}

.add-btn {
  background-color: purple;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

form > div {
  margin-bottom: 10px;
}

button:hover {
  opacity: 0.9;
}
</style>
