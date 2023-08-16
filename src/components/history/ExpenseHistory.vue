<template>
    <div className="expense-list">
        <div      
            class="list-item" v-for="({ title, price, id }) in expenses" :key="id">
            <p class="list-info"  :class="{ 'list-info-green': price > 0, 'list-info-red': price <= 0 }">
                {{ title }}
                <span> {{ price > 0 ? '+' + price : price  }}$</span>
            </p>
            <button @click="removeExpense(id)">
                <i class="pi pi-times"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExpenseHistory",
    props: {
        expenses: Array
    },

    methods: {
        removeExpense(id) {
            let expenseId = id
            this.$emit('remove-expense', expenseId)
        },
  
    }
}
</script>

<style>
.list-item {
    display: flex;
    align-items: center;
    gap: 10px;
}
.list-info span{
    font-weight: 500;
}
button {
    background-color: none;
    border: none;
    font-size: 20px;
    color: red;
    cursor: pointer;
}
.list-info-green{
    border-right: 4px solid green;
}
.list-info-red{
    border-right: 4px solid red;

}

.list-info {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

}
</style>