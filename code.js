function inscriptionPress(){
    var prenom = document.getElementById("prenom");
    var horaire = document.getElementById("horaire");
    var chapitre = document.getElementById("chapitre");
    var donner = document.getElementById("donner");
    
    var prenom_ = prenom.value;
    var horaire_ = horaire.value;
    var chapitre_ = chapitre.value;
    var donner_ = donner.value;
    
    var _donner_ = [donner_];
    var liste = [prenom_, horaire_, chapitre_];
    var liste_ = _donner_.concat(liste);
    var final = liste_.join(" / ");
    
    document.getElementById("donner").innerHTML = final;
    document.getElementById("prenom").innerHTML = " ";
    document.getElementById("horaire").innerHTML = " ";
    prenom.value = " ";
    horaire.value = " ";
    chapitre.value = " ";
    
    
}

