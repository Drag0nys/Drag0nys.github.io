function cacherReponses(num1){
    var reps = document.getElementsByClassName(num1);
    var arrReps = [].slice.call(reps);
    for(var i=0; i<arrReps.length; i++){
        arrReps[i].style.display = 'none';
    }
}
function afficherReponse(num){
    var aAfficher = document.getElementById(num);
    aAfficher.style.display = 'block';
}
function inscriptionPress(){
    var prenom = document.getElementById("prenom");
    var horaire = document.getElementById("horaire");
    var chapitre = document.getElementById("chapitre");
    var rep = document.getElementById("rep");
    
    var prenom_ = prenom.value;
    var horaire_ = horaire.value;
    var chapitre_ = chapitre.value;
    var rep_ = rep.value;
    
    let liste = [prenom_, horaire_, chapitre_]
    var reps = liste
    var rep.value = reps
    
}
