<template>
   <div>
        <button :class="{active:filter==='all'}" @click="filter='all' ">All</button>
        <button :class="{active:filter==='active'}" @click="filter='active'" >Active</button>
        <button :class="{active:filter==='completed'}" @click="filter='completed'" >Completed</button>
      </div>
      <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <div v-for="(todo, index) in todosFiltered" :key="todo.id" class="todo-item">
        <div class="todo-item-left">
          <!-- Check box -->
          <input type="checkbox" v-model="todo.completed">

          <!-- Edit Todo by double-clicking -->
          <div v-if="!todo.editing" @dblclick="edit(todo)" class="todo-item-label" :class="{ completed : todo.completed }">{{ todo.title }}</div>
        </div>
        <!--To remove a to-do X-->
        <div class="done" @click="remove(index)">
          &times;
        </div>
      </div>
    </transition-group>


<input v-model="newTask" @keyup.enter="add"/>
<div><label><input type="checkbox"  @change="checkAllTodos"> Check All</label></div>
<button @click="clearCompleted">Clear Completed</button>
<div>{{ remain }} items left</div>

</template>

<script>


export default {
    name: "TodoApp",
   data(){
    return {
      newTask:'',
    
      todos:[
      {
          id: 1,
          title: 'Finish this project! T-T',
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: 'Cry in bed for 5 mins',
          completed: true,
          editing: false,
        },
      ],
      filter: 'all'
    }

   },
  computed:{
    remain(){
    return this.todos.filter(item => !item.completed).length
    },
    todosFiltered(){
     if(this.filter === 'all'){
        return this.todos
     }else if(this.filter === 'active'){
      return this.todos.filter(item => !item.completed)
     }else if(this.filter ==='completed'){
      return this.todos.filter(item => item.completed)
     }
     return this.todos
    }
  },
  methods:{
     add(){
      this.todos.push({
        id:crypto.randomUUID(),
        title:this.newTask,
        completed:false,
        editing:false
      })
      this.newTask = ""
     },
     remove(id){
      this.todos = this.todos.filter(item => item.id !== id)
     },
     clearCompleted(){
      this.todos = this.todos.filter(item=> !item.completed)
     },
     checkAllTodos(){
    this.todos.forEach(item => item.completed === event.target.checked)
     }

  }
};
</script>

<style scoped>
button{
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
}
button.active{
  background-color: orange;
}
</style>


