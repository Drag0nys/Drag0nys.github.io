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
    var prenom = document.getElementsById(prenom);
    var horaire = document.getElementsById(horaire);
    var chapitre = document.getElementsById(chapitre);
    var rep = document.getElementsById(rep);
    
    let liste = [prenom, horaire, chapitre]
    var reps = liste
    rep.value = reps
    return liste
}
