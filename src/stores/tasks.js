import { defineStore } from 'pinia';

export const useFormStore = defineStore('task', {
  state: () => ({
    title: '',
    description: '',
    tasks:[]
  }),

  actions: {
    updateName(newName) {
      console.log('newName', newName)
      this.title = newName
    },

    updateMessage(newMessage) {
      console.log('newMessage', newMessage)
      this.description = newMessage
    },

    submitForm(formData) {
      console.log('Submitted Data:::::', { title: this.title, description: this.description })
      this.tasks.push({ title: this.title, description: this.description })
      console.log('this.tasks.push en el store', this.tasks)
      const tasks = JSON.stringify(this.tasks)
      console.log('stringgyfiction', tasks)
      localStorage.setItem('formData', tasks)
    },
  },
});
