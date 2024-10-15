<template>
  <div>
    <h1>{{ formTitle }}</h1>
    <form @submit.prevent="submitForm">
      <input v-model="task.title" type="text" placeholder="Task Title" required />
      <textarea v-model="task.desc" placeholder="Task Description" required></textarea>
      <input v-model="task.estimated_time" type="date" required />
      <select v-model="task.priority" required>
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'TaskForm',
  props: ['id'],
  data() {
    return {
      task: {
        title: '',
        desc: '',
        estimated_time: '',
        priority: 1,
      },
    };
  },
  computed: {
    formTitle() {
      return this.id ? 'Edit Task' : 'Create Task';
    },
    ...mapState(['task']),
  },
  created() {
    if (this.id) {
      this.fetchTask(this.id);
    }
  },
  methods: {
    ...mapActions(['createTask', 'updateTask', 'fetchTask']),
    submitForm() {
      if (this.id) {
        this.updateTask(this.task);
      } else {
        this.createTask(this.task);
      }
    },
  },
};
</script>
