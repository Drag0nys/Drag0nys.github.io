function inscriptionPress(){
    var prenom = document.getElementById("prenom");
    var horaire = document.getElementById("horaire");
    var chapitre = document.getElementById("chapitre");
    
    var prenom_ = prenom.value;
    var horaire_ = horaire.value;
    var chapitre_ = chapitre.value;
    
    let liste = [prenom_, horaire_, chapitre_]
    document.getElementById("rep").innerHTML = liste.join();
    console.log(liste)
    
}
