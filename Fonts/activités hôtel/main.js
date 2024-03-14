function showActivityDetails(activityId) {
  var selectedActivity = document.getElementById("selectedActivity");
  var activityName = "";

  switch (activityId) {
    case 1:
      activityName = "Activité 1";
      break;
    case 2:
      activityName = "Activité 2";
      break;
    case 3:
      activityName = "Activité 3";
      break;
    // Ajoutez d'autres cases si vous avez plus d'activités
  }

  selectedActivity.innerHTML = activityName;
  document.getElementById("activities").style.display = "none";
  document.getElementById("activityDetails").style.display = "block";
}

function showRegistrationForm() {
  document.getElementById("activityDetails").style.display = "none";
  document.getElementById("registrationForm").style.display = "block";
}

function register() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;

  // Valider et enregistrer les informations de l'utilisateur ici

  alert("Inscription validée pour l'activité!");
}