import { defineStore } from 'pinia'
import type { TaskState } from '@/models/TaskState'
import type { Task } from '@/models/Task';


export const useTaskStore = defineStore('task', {
  state: (): TaskState => ({
    loading: false,
    data: []
  }),
  actions: {
    addTask(task: Task) { // Agrega una nueva tarea al final de la lista `data`.
      this.data.push(task); // recibe una tarea de tipo Task y la agrega a la lista data utilizando push, que añade el elemento al final del array.
    },
    removeTask(task: Task) { //  // Filtra las tareas en `data` para eliminar la tarea cuyo `id` coincide con `task.id`.
      this.data = this.data.filter((t: Task) => t.id !== task.id); // removeTask utiliza el método filter para crear una nueva lista en data excluyendo la tarea que tenga el mismo id que la tarea pasada como argumento. Esto elimina efectivamente la tarea seleccionada.
    },
    updateTaskStatus(task: Task) {  // Encuentra el índice de la tarea en `data` que coincide con `task.id`.
      const index = this.data.findIndex((t: Task) => t.id === task.id);
      if (index !== -1) {
        this.data[index].status = !this.data[index].status; // se usa findIndex para localizar la posición de la tarea con el mismo id que la tarea pasada como argumento. Si la tarea se encuentra (index !== -1), el estado status se alterna a su valor contrario (de true a false o viceversa).
      }
    },
    showCompleted() { // Filtra data para mostrar solo tareas con status: true (completadas).
      this.data = this.data.filter((task: Task) => task.status);
    },
    showPending() { // Filtra data para mostrar solo tareas con status: false (pendientes).
      this.data = this.data.filter((task: Task) => !task.status);
    },
    showAll() { // Restaura la lista `data` para mostrar todas las tareas.
      this.data = [...this.data];
    }
  }
});


