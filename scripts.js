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
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        //    var loc = localStorage.getItem("todos", this.todos);
        //    console.log(object);
        alert("to-do text is required");
      }
    },
    storeTodos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
      console.log("updated");
    },
  },
  //   beforeCreate() {
  //     let dat = new Date();
  //     console.log("Before create");
  //     console.log(dat.getMilliseconds());
  //     console.log(this.newTodo);
  //   },
  created() {
    this.todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : this.todos;
  },
  updated() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
};

Vue.createApp(todosApp).mount("#app");
