function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Ajoute ici la logique de validation (par exemple, vérification dans une base de données)
    // Pour cet exemple, je vais simplement afficher une alerte si les champs sont remplis
    if (username && password) {
        alert("Connexion réussie!");
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}