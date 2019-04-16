<template>
  <section class="form-container">
    <h1>ユーザー追加</h1>
    <form class="form" @submit.prevent="submitForm">
      <input
        v-model="formData.name"
        type="text"
        placeholder="名前を入力してください"
        data-test="name"
      />
      <textarea
        v-model="formData.bio"
        placeholder="bioを入力してください"
        rows="4"
        data-test="bio"
      />
      <div class="button-wrapper">
        <button data-test="submit-button">送信する</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    formData: {
      name: null,
      bio: null
    }
  }),
  methods: {
    async submitForm() {
      await this.$axios.$post('/user', { ...this.formData })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.form-container {
  margin: 0 auto;
  padding: 20px;
  width: 800px;
}

.form {
  margin-top: 30px;
}

input,
textarea {
  width: 500px;
  margin-bottom: 10px;
}

button {
  width: 350px;
}
</style>
