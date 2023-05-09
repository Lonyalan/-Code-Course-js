function evenmultiplicationtableof4(){ 
    var result = "";
    for ( i = 0; i <= 100; i++) {
        var multiplication = 4 * i;
        
        if (i % 2 == 0) {
            result += "<p>4 x "+i+" = "+multiplication+"</p>";
        }
    }
    document.getElementById("resulteven").innerHTML = result; 
    
}

function oddmultiplicationtableof4(){ 
    var result = "";
    for ( i = 0; i <= 100; i++) {
        var multiplication = 4 * i;
        
        if (i % 2 != 0) {
            result += "<p>4 x "+i+" = "+multiplication+"</p>";
        }
    }
    document.getElementById("resultodd").innerHTML = result; 
}

function seconddegreeequation() {
    let a = 10, b = 20, c = 30, x = 1;
    let z = (a*(x**2))+(b*(x+c));
    document.getElementById("resultequation").innerHTML = z; 
}

function square2 (x){
    let result = x*x
    return result
}

function square (x){
    let result = x*x
    console.log (result)
    return result
}
//arrow function
square (x=>{
    let resultat = x*x
    return resultat
})

if (age>15)
    console.log ("Majeure")
else
    console.log ("Mineur")

//condition ternaire

age>15?console.log ("Majeure"): console.log ("Mineur");

// declaration d'un object en js

let person = {
    name:"hogi",
    surname:"Academy",
    age:50,
    fullName:(){return name+" "+surname}
}

function tableau(){
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";

    var tableau = [35,187,-50,11,-22,-253,4,405,6,7,8,9,100];

    let afficheTableau = "<table id='tab'><tr>";
    for(i=0; i<tableau.length; i++){
        afficheTableau += "<td>"+tableau[i]+"</td>";
    }
    afficheTableau += "<tr></table>"

    document.getElementById('exercice1').style.display = "block";
    document.getElementById('tableau').style.display = "block";
    document.getElementById('tableau').innerHTML = afficheTableau;
}

function croissantDecroissant(){
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";

    var tableau = [35,187,-50,11,-22,-253,4,405,6,7,8,9,100];
    let temp;

    let afficheTableau = "<table id='tab'><tr>";
    
    for(i=0; i<tableau.length; i++){
        afficheTableau += "<td>"+tableau[i]+"</td>";
    }
    afficheTableau += "<tr></table>";
    document.getElementById('tableau').style.display = "block";
    document.getElementById('tableau').innerHTML = afficheTableau;


    if(document.getElementById('croissant').style.display != "none"){

        for(i=0; i<tableau.length; i++){
            for(j=i+1; j<tableau.length; j++){
                if(tableau[i] > tableau[j]){
                    temp = tableau[i]; 
                    tableau[i] = tableau[j];
                    tableau[j] = temp;
                }
            }
        }

        document.getElementById('decroissant').style.display = "inline-block";
        document.getElementById('croissant').style.display = "none";
        var caption = "<caption>Croissant</caption>";


    }else if(document.getElementById('decroissant').style.display != "none"){

        for(i=0; i<tableau.length; i++){
            for(j=i+1; j<tableau.length; j++){
                if(tableau[i] < tableau[j]){
                    temp = tableau[i]; 
                    tableau[i] = tableau[j];
                    tableau[j] = temp;
                }
            }
        }

        document.getElementById('croissant').style.display = "inline-block";
        document.getElementById('decroissant').style.display = "none";
        var caption = "<caption>Décroissant</caption>";
    }
    
    afficheTableau = "";
    afficheTableau = "<table id='tab'>"+caption+"<tr>";

    for(i=0; i<tableau.length; i++){
        afficheTableau += "<td>"+tableau[i]+"</td>";
    }
    afficheTableau += "<tr></table>"

    document.getElementById('result').innerHTML = afficheTableau;
}

function cni() {
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";

    var cni = {
        nom: "Hogi",
        prenom: "Academy",
        age: "45",
        pere: "Mutama Javascript",
        mere: "Mutamakazi html",
        full_name: function() { return "Nom : "+this.nom+" "+this.prenom},
        nom_age: function() { return "Nom : "+this.nom+" , Age : "+this.age},
        pere_mere: function() { return "Père : "+this.pere+" , Mère : "+this.mere}
    }
    
    let afficheCni = "<table id='tab'><tr>";

    afficheCni += "<tr><td>"+cni.nom_age()+"</td>";
    afficheCni += "<td>"+cni.pere_mere()+"</td>";
    afficheCni += "<tr></table>";
    
    document.getElementById('tableau').innerHTML = "<table id='tab'><tr><tr><td colspan='2'>"+cni.full_name()+"</td></tr><tr></table>";
    document.getElementById('result').innerHTML = afficheCni;

}