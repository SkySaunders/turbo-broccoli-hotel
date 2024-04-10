let cityNames = [
    ["AL", ["Florence", "Mobile", "Huntsville"]],
    ["GA", ["Atlanta", "Savannah"]],
    ["FL", ["Miami", "Daytona Beach"]],
    ["MS", ["Natchez", "Olive Branch"]],
    ["NC", ["Charlotte", "Greensboro"]],
    ["TN", ["Nashville", "Memphis"]],
    ["SC", ["Charleston", "Columbia"]],
  ];

$( document ).ready(function() {
    // makes it such that only numbers may be entered
     $("#inputZip").keyup(function (e) {
        e.preventDefault();
        this.value = this.value.replace(/[^0-9\.]/g, "");
        $(this).next().text("we politely request you cease immediately. Numbers only thank you!");
      });


      $("#state").on("change", function (e) {
        //enables the pet name dropdown
        $("#cityNames").prop("disabled", false);
    
        let inputVal = this.value;
    
        console.log(inputVal);
    
        //loop though array of city names
        $.each(cityNames, function (key, value) {
          //match city to user selected
          if (inputVal === value[0]) {
            console.log(
              "value[0]:" + value[0] + ", key:" + key + "value: " + value
            );
            $.each(value, function (nestKey, nestValue) {
              // console.log(nestKey);
    
              switch (nestKey) {
                case 0:
                  $("label[for=cityNames]").text(nestValue);
                  $("#cityNames").empty();
                  $("#cityNames").append(
                    $("<option>").text(`select a ${nestValue} `)
                  );
                  break;
                case 1:
                  $.each(nestValue, function (nameKey, nameValue) {
                    console.log(nameKey, nameValue);
    
                    $("#cityNames").append(
                      $("<option>").val(nameValue).text(nameValue)
                    );
                  });
                  break;
              }
            });
          }
        });
      });

    // Verify entry into the email box
    $("#submitButton").click(function () {
        if ($("#noSpaces").val()) {
        console.log("there is something in this text box");
        $("#noSpaces").removeClass("error");
        } 
        else {
        console.log("there is NOTHING in this text box");
        $("#noSpaces").removeClass("success").addClass("error").focus();
        }
  });




});