$(document).ready(function(){
    $("#formTarefa").submit(function(event){
      event.preventDefault(); 

      var novaTarefa = $("#novaTarefa").val();
      if(novaTarefa !== "") { 
        $("#listaTarefas").append("<li>" + novaTarefa + "</li>");
        $("#novaTarefa").val(""); 
      }
    });
  
    $(document).on("click", "li", function(){
      $(this).toggleClass("tarefacompleta");
    });
  });