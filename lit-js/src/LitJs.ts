import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class LitJs extends LitElement {
  @property({ type: Array }) todos: string[] = [];

  @property({ type: String }) todoText: string = '';

  addTodo(event: Event) {
    event.preventDefault();
    this.todos = [...this.todos, this.todoText];
  }

  render() {
    return html`
      <ul>
        ${this.todos.map(todo => html`<li>${todo}</li>`)}
      </ul>

      <form @submit="${this.addTodo}">
        <input
          type="text"
          .value="${this.todoText}"
          @change=${(e: any) => {
            this.todoText = e.target.value;
          }}
        />
        <input type="submit" value="Add Todo" />
      </form>
    `;
  }
}
