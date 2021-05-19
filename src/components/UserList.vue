<template>
  <h2>Vue组合式API setup示例</h2>
  <p>
    输入过滤条件：<input v-model="filter">
  </p>
  <ul>
    <li
        v-for="(username, index) in filteredUser"
        :key="index">{{ username }}
    </li>
  </ul>
</template>

<script>
import useUserFilter from "@/assets/composables/useUserFilter";
import useUserList from "@/assets/composables/useUserList";

const mockUsers = ['Alice', 'Rose', 'Jack', 'Bob', 'Tim', 'Tom', 'Hanson']

export default {
  name: 'HelloWorld',
  setup() {
    const {
      users
    } = useUserList(mockUsers)
    const {
      filter,
      filteredUser
    } = useUserFilter(users)
    return {
      filter,
      filteredUser
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
