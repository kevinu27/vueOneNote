import { defineStore } from 'pinia';

export const taskStore = defineStore('task', {
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

    submitTaskForm(formData) {
      console.log('Submitted Data:::::', { title: this.title, description: this.description })
      this.tasks.push({ title: this.title, description: this.description })
      console.log('this.tasks.push en el store', this.tasks)
      const tasks = JSON.stringify(this.tasks)
      console.log('stringgyfiction', tasks)
      localStorage.setItem('formData', tasks)
    },
    loadLocalStorageTask() {
      const dataToLoadJSON = localStorage.getItem("formData")
      const dataToLoad = JSON.parse(dataToLoadJSON);

      if(dataToLoad.length > 0){
        this.tasks = dataToLoad
      }else{
        this.tasks = []
      }
      console.log('this.tasks---', this.tasks)

    },
  },
});
