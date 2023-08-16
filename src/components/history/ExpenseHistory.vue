<template>
<ul >

<li v-for="({title,price,id}) in expenses" :key="id">{{ title }}
<span>{{ price }}$</span>
<button @click="removeExpense(id)">Remove</button>

</li>



</ul>
</template>
<script>
export default{
    name:"ExpenseHistory",
    props:{
        expenses:Array
    },
    
    methods:{
        removeExpense(id){
            
            let expenseId = id
            this.$emit('remove-expense',expenseId)
        }
    }
}

</script>
<style>
 li{
    background-color: #fff;
    display: flex;
    justify-content:space-between;
    padding: 10px;
     width: 100%;
 }

</style>