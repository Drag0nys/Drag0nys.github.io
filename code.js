function inscriptionPress(){
    var prenom = document.getElementById("prenom");
    var horaire = document.getElementById("horaire");
    var chapitre = document.getElementById("chapitre");
    
    var prenom_ = prenom.value;
    var horaire_ = horaire.value;
    var chapitre_ = chapitre.value;
    
    var liste = [prenom_, horaire_, chapitre_];
    var final = liste.join(" / ");
    document.getElementById("rep").innerHTML = final;
    
    console.log(liste)
    
}

