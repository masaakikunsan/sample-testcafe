<template>
  <section class="container">
    <div class="head">
      <h1>ユーザー一覧</h1>
      <button @click="$router.push('/create')">
        ユーザーを追加する
      </button>
    </div>
    <div v-if="users.length" class="table-wrapper">
      <table data-test="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>ユーザー名</th>
            <th>bio</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(user, key) in users">
            <tr :key="key">
              <td>{{ user.id }}</td>
              <td data-test="user-name">{{ user.name }}</td>
              <td data-test="user-bio">{{ user.bio }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const users = await app.$axios.$get('/user')
    return {
      users
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 20px;
  width: 800px;
}

.head {
  display: flex;
  align-items: center;
}

h1 {
  margin-right: 30px;
}

.table-wrapper {
  margin-top: 30px;
}

table {
  border: 1px solid #ccc;
  border-spacing: 0;
  border-collapse: collapse;
}

td,
th {
  padding: 10px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

td:last-child,
th:last-child {
  border-right: 0;
}
</style>
