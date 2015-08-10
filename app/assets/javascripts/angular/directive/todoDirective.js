toDo = window.toDo || {}
toDo.directive('todoAccordion',['$animate',function($animate){
  function link(scope,element,attrs){
    var preventInitial = false
    function openCollapse(){
      $('.collapse').collapse('hide')
      element.find('.collapse').collapse('toggle')
    }

    scope.$watch(attrs.collapse,function(toggle){
          if(toggle){
            preventInitial = true
          }
          if(preventInitial){
              openCollapse()
          }

    })
  }
  return{
    link: link
  }
}])
