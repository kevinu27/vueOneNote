<script setup>
import TaskForm from './TaskForm.vue';
import TaskList from './TaskList.vue';
</script>

<template>
  <div class="homeTask">
  <p>HomeTask</p>
  <div class="taskForm">
  <TaskForm></TaskForm>
  <form></form>
</div>
<div class="taskList">
<TaskList></TaskList>
</div>
</div>



</template>

<style scoped>
.homeTask{
  display: flex;
  flex-direction: column;
  border: 2px solid red
}

</style>
