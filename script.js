 function oblicz() {
     let wz = document.getElementById('wzrost').value;
     let wa = document.getElementById('waga').value;
     let wzk = (wz / 100);
     let tbmi = (wa / (wzk * wzk));
     let bmi = tbmi.toFixed(2);
     if (bmi < 18.5) {
         document.getElementById('wynik').innerHTML = "BMI = " + bmi + "<br>Niedowaga - za mało żresz. Pewnie wygląsz jak pierdolony węgorz!"
     } else if ((18.5 <= bmi) && (bmi <= 24.99)) {
         document.getElementById('wynik').innerHTML = "BMI = " + bmi + "<br>Waga prawidłowa. Ani za chuda/y ani za gruba/y. Taki w sam raz."
     } else if ((25 <= bmi) && (bmi <= 29.99)) {
         document.getElementById('wynik').innerHTML = "BMI = " + bmi + "<br>Nadwaga - za dużo kebabów. Zwolnij z żarciem, bo Cię Greenpeace będzie na plaży do morza wpychał."
     } else if (30 < bmi) {
         document.getElementById('wynik').innerHTML = "BMI = " + bmi + "<br>Ja pierdolę!! Spaślak pełną gębą. Bez boomerangu paska nie założysz"
     };
 }

 let button = document.getElementById('btn');
 button.addEventListener('click', oblicz);
