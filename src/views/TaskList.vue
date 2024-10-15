<template>
  <div>
    <h1>Task List</h1>
    <router-link to="/tasks/new">Create New Task</router-link>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <router-link :to="`/tasks/${task.id}`">{{ task.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TaskList',
  computed: {
    ...mapState(['tasks']),
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    ...mapActions(['fetchTasks']),
  },
};
</script>
