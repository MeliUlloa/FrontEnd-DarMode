import { defineStore } from 'pinia'
import type { ModoState } from '@/models/ModoState'
import type { TaskState } from '@/models/TaskState'

 export const useTaskStore = defineStore('task', {
   state: () => ({
     loading: false,
     data: [],
   }),
   actions: {
     addTask(task) {
       this.data.push(task);
     },
     removeTask(task) {
      this.data = this.data.filter(t => t.id !== task.id);
     },
     updateTaskStatus(task) {
       const index = this.data.findIndex(t => t.id === task.id);
       if (index !== -1) {
         this.data[index].status = task.status;
       }
    },
   },
 });



