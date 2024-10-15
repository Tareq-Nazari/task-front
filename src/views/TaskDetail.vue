<template>
  <div>
    <h1>{{ task.title }}</h1>
    <p>{{ task.desc }}</p>
    <p>Status: {{ task.status }}</p>
    <router-link :to="`/tasks/${task.id}/edit`">Edit Task</router-link>
    <button @click="deleteTask(task.id)">Delete Task</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TaskDetail',
  props: ['id'],
  computed: {
    ...mapState(['task']),
  },
  created() {
    this.fetchTask(this.id);
  },
  methods: {
    ...mapActions(['fetchTask', 'deleteTask']),
  },
};
</script>
