Batman.config.minificationErrors = false
class Super extends Batman.App
  @set 'mission', 'fight crime'

  # Set the root route to ExamplesController#index.
  @root 'hero#index'
  @route '/stats', 'hero#stats'

# Make Jkl available in the global namespace so it can be used
# as a namespace and bound to in views.
window.Super = Super
