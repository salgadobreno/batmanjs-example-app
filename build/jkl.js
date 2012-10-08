(function() {
  var Super,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Batman.config.minificationErrors = false;

  Super = (function(_super) {

    __extends(Super, _super);

    function Super() {
      return Super.__super__.constructor.apply(this, arguments);
    }

    Super.set('mission', 'fight crime');

    Super.root('hero#index');

    Super.route('/stats', 'hero#stats');

    return Super;

  })(Batman.App);

  window.Super = Super;

}).call(this);
