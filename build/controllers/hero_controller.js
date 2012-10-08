(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Super.HeroController = (function(_super) {

    __extends(HeroController, _super);

    function HeroController() {
      return HeroController.__super__.constructor.apply(this, arguments);
    }

    HeroController.prototype.index = function() {
      this.set('currentHeroes', Super.Hero.get('all'));
      return console.log('Superheroes ready!');
    };

    HeroController.prototype.stats = function() {
      return this.set('currentHeroes', Super.Hero.get('all'));
    };

    HeroController.prototype.createHero = function() {
      var newHero;
      newHero = new Super.Hero({
        name: '',
        power: Math.floor(Math.random() * 100)
      });
      newHero.save();
      return console.log('Created', newHero);
    };

    HeroController.prototype.saveHero = function(node, event, context) {
      var hero;
      hero = context.get('hero');
      return hero.save();
    };

    HeroController.prototype.deleteHero = function(node, event, context) {
      var hero;
      hero = context.get('hero');
      return hero.destroy();
    };

    return HeroController;

  })(Batman.Controller);

}).call(this);
