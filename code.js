function inscriptionPress(){
    var prenom = document.getElementById("prenom");
    var horaire = document.getElementById("horaire");
    var chapitre = document.getElementById("chapitre");
    var donner = document.getElementById("donner");
    
    var prenom_ = prenom.value;
    var horaire_ = horaire.value;
    var chapitre_ = chapitre.value;
    var donner_ = donner.value;
    
    var liste = [prenom_, horaire_, chapitre_];
    var final = liste.join(" / ");
    
    document.getElementById("rep").innerHTML = donner_ + final;
    document.getElementById("prenom").innerHTML = " ";
    document.getElementById("horaire").innerHTML = " ";
    prenom.value = " ";
    horaire.value = " ";
    chapitre.value = " ";
    
}

