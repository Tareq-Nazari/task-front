import { createStore } from 'vuex';
import axios from '../axios'; // Import the Axios instance

export default createStore({
  state: {
    tasks: [],
    task: null,
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    SET_TASK(state, task) {
      state.task = task;
    },
    ADD_TASK(state, task) {
      state.tasks.unshift(task);
    },
    UPDATE_TASK(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      try {
        const response = await axios.get('/tasks');
        commit('SET_TASKS', response.data.data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    },
    async fetchTask({ commit }, taskId) {
      try {
        const response = await axios.get(`/tasks/${taskId}`);
        commit('SET_TASK', response.data.data);
      } catch (error) {
        console.error('Failed to fetch task:', error);
      }
    },
    async createTask({ commit }, taskData) {
      try {
        const response = await axios.post('/tasks', taskData);
        commit('ADD_TASK', response.data.data);
      } catch (error) {
        console.error('Failed to create task:', error);
      }
    },
    async updateTask({ commit }, taskData) {
      try {
        const response = await axios.put(`/tasks/${taskData.id}`, taskData);
        commit('UPDATE_TASK', response.data.data);
      } catch (error) {
        console.error('Failed to update task:', error);
      }
    },
    async deleteTask({ commit }, taskId) {
      try {
        await axios.delete(`/tasks/${taskId}`);
        commit('DELETE_TASK', taskId);
      } catch (error) {
        console.error('Failed to delete task:', error);
      }
    },
  },
  modules: {},
});
