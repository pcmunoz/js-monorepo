import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() todoText = ''
  @State() todos = []

  private addTodo(event) {
    event.preventDefault()

    this.todos = [...this.todos, this.todoText]
  }

  render() {
    return (
      <div>
        <ul>
          {this.todos.map(todo => (<li key={todo}>{todo}</li>))}
        </ul>
        <form onSubmit={(e) => this.addTodo(e)}>
          <input 
            value={this.todoText} 
            onChange={(e:any) => { this.todoText = e.target.value}}
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    )
  }
}
