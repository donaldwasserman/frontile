// BEGIN-SNIPPET demo-forms-form-textarea-standard-index.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DemoComponent extends Component {
  @tracked value = '';

  get validationErrors() {
    if (/^$/.test(this.value)) {
      return ['Please enter text'];
    } else {
      return [];
    }
  }

  @action setValue(value) {
    this.value = value;
  }
}
// END-SNIPPET
