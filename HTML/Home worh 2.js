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
