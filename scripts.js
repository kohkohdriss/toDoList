const todosApp = {
  data() {
    return {
      todos: [],
      newTodo: {
        done: false,
      },
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = {
          done: false,
        };
      } else {
        alert("to-do text is required");
      }
    },
    clear() {
      this.todos = [];
    },
  },
};

Vue.createApp(todosApp).mount("#app");
