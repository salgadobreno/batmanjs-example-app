(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Super.Hero = (function(_super) {

    __extends(Hero, _super);

    function Hero() {
      return Hero.__super__.constructor.apply(this, arguments);
    }

    Hero.persist(Batman.LocalStorage);

    Hero.encode('name', 'power');

    Hero.storageKey = 'super-hero';

    Hero.classAccessor('statistics', function() {
      var heroes, totalPower;
      heroes = this.get('all');
      totalPower = 0;
      heroes.forEach(function(h) {
        return totalPower += h.get('power');
      });
      return [heroes.length, totalPower / heroes.length];
    });

    return Hero;

  })(Batman.Model);

}).call(this);
