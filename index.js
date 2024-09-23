// Fonctions de manipulation de chaînes
// 1. Inverser une chaîne
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}
console.log(inverserChaine("Harley"));

// 2. Compter les caractères
function compterCaracteres(chaine) {
    return chaine.length;
}
console.log(compterCaracteres("GOMYCODE"));

// 3. Mettre les mots en majuscule
function mettreMotsEnMajuscule(phrase) {
    return phrase.split(' ').map(function(mot) {
        return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
    }).join(' ');
}
console.log(mettreMotsEnMajuscule("bonjour tout le monde"));

// Fonctions de tableau

// 1. Rechercher le maximum
function trouverMaximum(tab) {
    return Math.max.apply(null, tab);
}
const tableau = [1, 2, 3, 4, 5, 6];
console.log(trouverMaximum(tableau));

// 2. Rechercher le minimum
function trouverMinimum(tab) {
    return Math.min.apply(null, tab);
}
console.log(trouverMinimum(tableau));

// 3. Somme d'un tableau
function sommeTableau(tab) {
    return tab.reduce(function(accumulateur, valeur) {
        return accumulateur + valeur;
    }, 0);
}
console.log(sommeTableau(tableau));

// 4. Filtrer le tableau
function filtrerTableau(tab, condition) {
    return tab.filter(condition);
}
console.log(filtrerTableau(tableau, (x) => x > 2));

// Fonctions mathématiques

// 1. Factorielle
function factorielle(n) {
    if (n < 0) return undefined;
    return n === 0 ? 1 : n * factorielle(n - 1);
}
console.log(factorielle(5));

// 2. Vérification des nombres premiers
function estPremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(estPremier(7));

// 3. Suite de Fibonacci
function fibonacci(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result.push(0);
        } else if (i === 1) {
            result.push(1);
        } else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }
    return result;
}
console.log(fibonacci(5));







