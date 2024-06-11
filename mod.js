function populateDates() {
    var select = document.getElementById('hireYear');
    var startYear = 1950;
    var endYear = 2024;
  
    for (var year = startYear; year <= endYear; year++) {  
        var option = document.createElement('option');
        option.value = year;
        option.text = year;
        select.appendChild(option);
    }
  }
  populateDates();

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    var fullName = document.getElementById('fullName');
    var gender = document.querySelector('input[name="gender"]:checked');
    var hireYear = document.getElementById('hireYear');
    var year = 2024;
    var exp = year - hireYear.value;
    var skills = [];
    var cpte = 0;
    document.querySelectorAll('input[name="skills"]:checked').forEach(function (checkbox) {
        skills.push(checkbox.value);
        cpte = cpte + 1;
    });
    console.log(cpte)

    var message = "Monsieur " + fullName.value + "\nGenre: " + gender.value + "\nNombre d'années d'experience: " + exp + "Ans\nCompétences: " + cpte + "\n" + skills.join(', ');

    alert('Formulaire soumis avec succès!\n\n' + message);
});