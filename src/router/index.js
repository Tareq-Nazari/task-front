import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../views/TaskList.vue';
import TaskDetail from '../views/TaskDetail.vue';
import TaskForm from '../views/TaskForm.vue';

const routes = [
  {
    path: '/',
    name: 'TaskList',
    component: TaskList,
  },
  {
    path: '/tasks/:id',
    name: 'TaskDetail',
    component: TaskDetail,
    props: true,
  },
  {
    path: '/tasks/new',
    name: 'TaskCreate',
    component: TaskForm,
  },
  {
    path: '/tasks/:id/edit',
    name: 'TaskEdit',
    component: TaskForm,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
