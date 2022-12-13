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
    var prenom = document.getElementById(prenom);
    var horaire = document.getElementById(horaire);
    var chapitre = document.getElementById(chapitre);
    var rep = document.getElementById(rep);
    
    let liste = [prenom, horaire, chapitre]
    var reps = liste
    rep.value = reps
    return liste
}
