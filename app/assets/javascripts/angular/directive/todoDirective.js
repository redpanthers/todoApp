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
  .directive('uploadProgress',['$animate',function($animate){
    function link(scope,element,attr){
      scope.$watch(attr.percentage,function(progress){
        element.css({
          width: progress+'%'
        })
      })
    }
    return{
      link: link
    }
  }])
