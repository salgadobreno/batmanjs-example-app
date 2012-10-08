class Super.Hero extends Batman.Model
  @persist Batman.LocalStorage
  @encode 'name', 'power'
  @storageKey: 'super-hero'
  @classAccessor 'statistics', ->
    heroes = @get 'all'
    totalPower = 0
    heroes.forEach (h) ->
      totalPower += h.get 'power'
    return [heroes.length, totalPower/heroes.length]

