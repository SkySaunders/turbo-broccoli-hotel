let cityNames = [
    ["AL", ["Florence", "Mobile", "Huntsville"]],
    ["GA", ["Atlanta", "Savannah"]],
    ["FL", ["Miami", "Daytona Beach"]],
    ["MS", ["Natchez", "Olive Branch"]],
    ["NC", ["Charlotte", "Greensboro"]],
    ["TN", ["Nashville", "Memphis"]],
    ["SC", ["Charleston", "Columbia"]],
  ];

  function storeInput(){
    const inputArray = [];

    const input1 = document.getElementById("noSpaces");
    const input2 = document.getElementById("inputAddress");
    const input3 = document.getElementById("inputZip");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    inputArray.push(value1, value2, value3);

    console.log(inputArray);
}

function jget() {

    console.log("in jget");
    fetch("data/india.json")
    .then((result) => {
            console.log(result);
            return result.json();
        })
        .then((response) => {
            console.log(response);
            console.log(response.name); 
        })
    .catch((error) => { console.log(error); });
}

  
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


$('#btnLoadData').click(function() {
    jget()
    storeInput()


})



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