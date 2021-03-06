$(function () {
    $(".devour").on("click", function (event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newburger");
  
      var addNewBurger = {
        devoured: newBurger
      };
  
      
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: addNewBurger
      }).then(
        function () {
          console.log("test PUT burger", newBurger);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function (event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#eb").val().trim(),
    
      };
  
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });