
<template>
    <div class="wrapper">
    <expense-income-stat :income="getIncome" :expense="getExpense" />
    <expense-history  @remove-expense="removeExpenses" :expenses="expenses"/>
    <expense-form @new-expense="handleNewExpense" :expenses="expenses"/>
</div>
</template>
<script>
import ExpenseForm from "@/components/forms/ExpenseForm.vue";
import ExpenseIncomeStat from "@/components/stats/ExpenseIncomeStat.vue";
import ExpenseHistory from "@/components/history/ExpenseHistory.vue"

export default{
    name:'HomePage',
    
    data(){
        return{
            expenses:JSON.parse(sessionStorage.getItem('expenses')) || []
        }
    },
    methods: {
        handleNewExpense(newExpense) {
            this.expenses.push(newExpense);
            sessionStorage.setItem('expenses',JSON.stringify(this.expenses))
        },
        removeExpenses(expenseId){
            this.expenses = this.expenses.filter(item => item.id !== expenseId);
            sessionStorage.setItem('expenses',JSON.stringify(this.expenses));
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
        ExpenseIncomeStat,
        ExpenseHistory
    }
}
</script>