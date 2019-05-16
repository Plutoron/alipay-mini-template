const app = getApp()
import {
  formatNumber,
} from '/utils/util'
import io from './io'

Page({
  data: {},

  async onLoad() {
    console.log(formatNumber(9))
    app.getUserInfo().then(
      user => {
        this.setData({
          user,
        });
      },
      () => {
        // 获取用户信息失败
      }
    );

    try {
      await io.search({
        type: 'yuantong',
        postid: 11111111111
      })
    } catch(e) {
      app.message(e)
    }
  },

  onShow() {
    this.setData({ todos: app.todos });
  },

  onTodoChanged(e) {
    const checkedTodos = e.detail.value;
    app.todos = app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    }));
    this.setData({ todos: app.todos });
  },

  async addTodo() {
   await my.navigateTo({ url: '../add-todo/add-todo' });
  },
});
