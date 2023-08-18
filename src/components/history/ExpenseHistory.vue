<template>
    <div className="expense-list">
        <div class="list-item" v-for="({ title, price, id }) in expenses" :key="id">
            <p class="list-info" :class="{ 'list-info-green': price > 0, 'list-info-red': price <= 0 }">
                {{ title }}
                <span> {{ price > 0 ? '+' + price : price }}$</span>
            </p>
            <button @click="removeExpense(id,title)">
                <i class="pi pi-times"></i>
            </button>
        </div>
        <div class="modal" v-show="showModal">
            <div class="modal-content">
                <p>Are you sure you want to remove this '{{this.expenseName}}'?</p>
                <button @click="cancelRemove">Cancel</button>
                <button @click="confirmRemove">Remove</button>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "ExpenseHistory",
    props: {
        expenses: Array
    },
    components: {

    },
    data() {
        return {
            showModal: false,
            expenseToRemoveId: "",
            expenseId: "",
            expenseName:""
        }
    },
    methods: {
        removeExpense(id,title) {

            this.showModal = true
            this.expenseId = id;
            this.expenseName = title
        },
        cancelRemove() {
            this.showModal = false;
        },
        confirmRemove() {
            if (this.expenseId) {

                this.$emit('remove-expense', this.expenseId)
                this.showModal = false;
            }
        }


    }
}
</script>

<style>
.list-item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.list-info span {
    font-weight: 500;
}

button {
    background-color: none;
    border: none;
    font-size: 20px;
    color: red;
    cursor: pointer;
}

.list-info-green {
    border-right: 4px solid green;
}

.list-info-red {
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

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.modal button {
    background-color: none;
    border: none;
    font-size: 16px;
    padding: 6px 12px;
    cursor: pointer;
}

.modal button:first-child {
    color: gray;
}

.modal button:last-child {
    color: red;
}
</style>