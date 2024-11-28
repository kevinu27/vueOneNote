<script >
import { taskStore } from '../stores/tasks';
export default {
  data() {
    return {
      formData: {
  
      },
    }
  },

  computed: {
    tasks() {
      return taskStore()
    },
  },
  
  methods: {
    handleSubmit() {

    },
  },

  mounted() {
    console.log('Component Mounted TaskList')

  },
}
</script>

<template>
<div v-for="item in tasks.tasks" class="taskcard">
  <div class="texts">
    <p>
    {{ item.title }}
    </p> 
    <p>
      {{ item.description }}
    </p> 
  </div>

  <div class="buttons">
    <button>eliminar</button>
    <button>borrar</button>
  </div>

</div>
</template>

<style scoped>
.taskcard{
  border: 2px solid purple;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
.texts{
  display: flex;
  flex-direction: column;
  border: 2px solid green;
}
.texts p{
margin-top: 0.5rem;
margin-left: 1rem;
margin-bottom: 0.5rem;
}
.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
}
.buttons button{
  margin-right: 0.5rem;
}
</style>
