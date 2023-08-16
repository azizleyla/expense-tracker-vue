
<template>
    <div class="wrapper">
    <ExpenseIncomestat :income="getIncome" :expense="getExpense" />
    <ExpenseHistory  @remove-expense="removeExpenses" :expenses="expenses"/>
    <ExpenseForm @new-expense="handleNewExpense" :expenses="expenses"/>
</div>
</template>

<script>
import ExpenseForm from "@/components/forms/ExpenseForm.vue";
import ExpenseIncomestat from "@/components/stats/ExpenseIncomestat.vue";
import ExpenseHistory from "@/components/history/ExpenseHistory.vue"

export default{
    name:'HomePage',
    
    data(){
        return{
            expenses:[{title:"Expense1",price:500}]
        }
    },
    methods: {
        handleNewExpense(newExpense) {
            this.expenses.push(newExpense);
        },
        removeExpenses(expenseId){
            this.expenses = this.expenses.filter(item => item.id !== expenseId)
        }
        
    },
    computed: {
        getIncome() {
            let income = this.expenses.filter(item => item.price > 0)
            return income.reduce((a,c) => a + c.price,0)
        },
        getExpense() {
            let expense = this.expenses.filter(item => item.price < 0)
            return expense.reduce((a,c) => a + c.price,0)
     }
    },
    components:{
        ExpenseForm,
        ExpenseIncomestat,
        ExpenseHistory
    }
}
</script>