<template>
<div class="balance-stats">
    <div class="income">
   <p>INCOME</p>
   <span>{{ income }}</span>
    </div>
    <div class="expense">
        <p>EXPENSE</p>
        <span>{{ expense }}</span>
    </div>
</div>
</template>

<script>
export default {
    name: "ExpenseIncomestat",
    props: ['income','expense']
}
</script>
<style>
.balance-stats{
    background-color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 30px 0;
    border-radius: 5px;
}
span{
    font-weight: 600;
}
.income span{
    color:green;
}
.expense span{
    color:red;
}
</style>