
      // Funksjoner for og regne ut

      // Funksjonen for å regne ut desimal til binær
      function regnut() {
        var tall = document.getElementById("decimalValue").value;

        let number = parseInt(tall);

        //Konverterer til binærtall
        let result = number.toString(2);

        binaryDone.innerHTML = result;
      }


      //Funksjon for å regne desimal til hexadesimal

      function regnutFire() {
        var tallFire = document.getElementById("decimalValueTwo").value;

        let numberFire = parseInt(tallFire, 10).toString(16).toUpperCase()

        console.log(tallFire)
        console.log(numberFire)

        hexaDone.innerHTML = numberFire

      }

      // Funksjonen for å regne ut binær til desimal
      function regnutEn() {
        var tallEn = document.getElementById("binaryValue").value;

        //Konverterer til desimal
        let numberEn = parseInt(tallEn, 2);

        decimalDone.innerHTML = numberEn;
      }

      // Funksjonen for å regne ut binær til hexadesimal
      function regnutTo() {
        var tallTo = document.getElementById("hexaValue").value;

        // Konverterer til hexadesimal
        let hexEn = parseInt(tallTo, 2).toString(16).toUpperCase();

        binaryDoneTwo.innerHTML = hexEn;
      }

      // Funksjonen for å konvertere til binær
      function regnuTre() {
        var tallTre = document.getElementById("hexValueTwo").value;

        let numberTre = parseInt(tallTre, 16).toString(2).toUpperCase();

        //Konverterer til binær

        hexaDoneTwo.innerHTML = numberTre;
      }
    