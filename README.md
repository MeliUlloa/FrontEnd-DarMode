# Recuperatorio TSDSF 2do, Programacion Front End 

## Instrucciones

### MODELAJE
- Crear modelo Task, que incluye un id (number), una tarea (string) y un status (boolean).

- Crear un Modelo TaskState, que incluye un booleano loading, y una lista data de Task[]

- Crear un Modelo ThemeState que almacene los atributos isDark booleano y mode, que es un string que indica si el  tema es light o dark.

### ESTADO DE LA APLICACION
- Crear dos store con pinia que incluya los modelos TaskState y ThemeState:

* ThemeStore: debe contener una constante useThemeStore usando defineStore, que implemente el modelo ThemeState y un metodo para cambiar el tema. El estado inicial debe setearse en isDark: false, y  mode: 'Light Mode'. El metodo unicamente debe cambiar el isDark a !isDark y el string de mode a 'Dark / Light Mode' segun corresponda.

* TaskStore debe contener una constante useTaskStore usando defineStore, que implemente el modelo TaskState. Definir el estado incial en loading false, data igual a una lista vacia. Se deberan crear los siguientes metodos:
- **addTask**, agrega una nueva tarea a la lista en data usando el metodo de array push.
- **removeTask**, recibe un tipo Task como argumento quita una nueva tarea de la lista en data usando el metodo filter.
- **updateTaskStatus**, recibe un argumento de tipo Task y busca el indice en la lista usando el metodo findIndex, para luego instanciar el elemento Task de la lista por su indice y modificar su status a falso o verdadero segun corresponda.

### Opcionalmente (no se calificara si esta mal) son los metodos: <br>
**showCompleted**: actualiza data para mostrar solo tareas con status completo <br>
**showPending**: actualiza data para mostrar solo tareas con status pendiente <br>
**showAll**: actualiza data para mostrar todos los datos.


### IMPLEMENTACION EN COMPONENTES

#### App.vue
- Debemos importar nuestro useThemeStore, e instanciarlo en una variable reactiva.
- Luego utilizarlo en las directivas indicadas

#### InputComponent.vue
- Debemos importar nuestro useThemeStore, e instanciarlo en una variable reactiva.
- Debemos importar nuestro useTaskStore, e instanciarlo en una variable reactiva
- Luego utilizarlos en las directivas indicadas

#### TodoListComponent.vue
- Debemos importar nuestro useThemeStore, e instanciarlo en una variable reactiva.
- Debemos importar nuestro useTaskStore, e instanciarlo en una variable reactiva
- Luego utilizarlos en las directivas indicadas

