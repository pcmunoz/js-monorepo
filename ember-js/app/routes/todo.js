import Route from '@ember/routing/route';

export default class TodoRoute extends Route {
  model() {
    return ['string1', 'string2'];
  }
}
