var todos = [
  {
    text: "Learn HTML, CSS and Javascript",
    done: true,
  },
  {
    text: "Learn the basics of Vue JS",
    done: false,
  },
];

const todosApp = {
  data() {
    return {
      todos: window.todos,
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
