<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form Data:", this.formData);
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
          id="name"
          v-model="formData.name"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <textarea
          id="message"
          v-model="formData.message"
          placeholder="Enter your message"
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
}

</style>
