
<template>
    <div class="wrapper">
    <ExpenseIncomestat/>
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
            alert(expenseId)
            this.expenses = this.expenses.filter(item => item.id !== expenseId)
        }
        
    },
    components:{
        ExpenseForm,
        ExpenseIncomestat,
        ExpenseHistory
    }
}
</script>