<script>
import { useFormStore } from '../stores/tasks';

export default {
  data() {
    return {
      formData: {
        title: '',
        description: '',
      },
    }
  },

  computed: {
    formStore() {
      return useFormStore();
    },
  },
  
  methods: {
    handleSubmit() {
      // Update Pinia store with form data
      this.formStore.title = this.formData.title;
      this.formStore.description = this.formData.description;

      // Log the form data to console
      console.log('Form Data:', this.formData);

      // Save to LocalStorage
      // localStorage.setItem('formData', JSON.stringify(this.formData));

      // Call store's submit action (optional)
      this.formStore.submitForm(this.formData);
    },
  },
}
</script>

<template>
  <div>

    <form @submit.prevent="handleSubmit" class="formHolder">
      <div class="inputForm">
        <input
          type="text"
          id="title"
          v-model="formData.title"
          placeholder="titulo"
        />
      </div>

      <div>
        <textarea
          id="description"
          v-model="formData.description"
          placeholder="Descripcion"
        ></textarea>
      </div>
      <button type="submit">+</button>
    </form>

  </div>
</template>

<style scoped>
.formularioInner{
  border: 2px solid green;
}
.inputForm{

}

.formHolder{
  display: flex;
  border: 2px solid purple;
  justify-content: space-between;
  align-items: center;
}
input{
  margin-right: 1rem;
  margin-left: 1rem;
  margin-right: 2rem;
  border-radius: 5px;
  height: 2rem;
  width: 20rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: border-color 0.15s ease;
}
textarea{
  margin-right: 1rem;
  margin-right: 2rem;
  height: 5rem;
  align-items: center;
  border-radius: 5px;
  width: 20rem;
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: border-color 0.15s ease;
  overflow: hidden;
}
button{
  margin-right: 1rem;
  background-color: rgb(17, 24, 39);
    color: white;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    width: 50px;
    margin-bottom: 1rem;
    background-color: rgb(17, 24, 39);
    color: white;
    padding: 0;
    max-width: 20%;
    margin-bottom: 1rem;
    height: 50px;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
}

</style>
