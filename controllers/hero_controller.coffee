class Super.HeroController extends Batman.Controller
  index: ->
    @set 'currentHeroes', Super.Hero.get 'all'
    console.log 'Superheroes ready!'
  stats: ->
    @set 'currentHeroes', Super.Hero.get 'all'
  createHero: ->
    newHero = new Super.Hero(name:'', power:Math.floor(Math.random() * 100))
    newHero.save()
    console.log 'Created', newHero
  saveHero: (node, event, context) ->
    hero = context.get 'hero'
    hero.save()
  deleteHero: (node,event,context) ->
    hero = context.get 'hero'
    hero.destroy()

