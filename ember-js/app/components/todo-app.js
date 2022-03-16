import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TodoAppComponent extends Component {
  @tracked
  inputText = '';

  @action
  submit(model, event) {
    console.log(this.inputText);
    event.preventDefault();
    model.pushObject(this.inputText);
  }

  @action
  onChange(event) {
    this.inputText = event.target.value;
  }
}
