function inscriptionPress(){
    var prenom = document.getElementById("prenom");
    var horaire = document.getElementById("horaire");
    var chapitre = document.getElementById("chapitre");
    var donner = document.getElementById("donner");
    
    var prenom_ = prenom.value;
    var horaire_ = horaire.value;
    var chapitre_ = chapitre.value;
    var donner_ = donner.value;
    
    let p1 = document.getElementById('p1');
    var liste = [prenom_, horaire_, chapitre_];
    var final = liste.join(" / ");
    let newP = document.createElement('p');
    let b = document.body;
    
    newP.textContent = final;
    b.insertBefore(newP,p1);
    prenom.value = " ";
    horaire.value = " ";
    chapitre.value = " ";
   
    
}

