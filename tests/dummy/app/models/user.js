import DS from 'ember-data';
import EV from 'ember-validations';

var User = DS.Model.extend(EV.Mixin, {
  name: DS.attr('string'),
  password: DS.attr('string'),
  nameHasValue: (function() {
    var _ref;
    return !((_ref = this.get('name')) != null ? _ref.length : void 0);
  }).property('name')
});

User.reopen({
  validations: {
    name: {
      presence: true,
      length: {
        minimum: 5
      }
    },
    password: {
      presence: true,
      length: {
        minimum: 6
      }
    }
  }
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Arek Dolv'
    }, {
      id: 2,
      name: 'Andy Genty'
    }
  ]
});

export default User;