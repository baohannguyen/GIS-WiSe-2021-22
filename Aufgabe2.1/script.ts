//Aufgabe 1
function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}
//a)
//Alles, Klar?, Logo!
//Variablennamen die zulässig sind, dürfen Ziffern (0-9), Buchstaben (a-z, A-Z) und zwei weitere Zeichen (Unterstrich und $) in ihre Bezeichnung haben
//Der Variablename darf nicht mit einer Ziffer beginnen und es dürfen keine Leerzeichen sowie Bindestrichen im Namen enthalten sein. Außerdem darf man auch keine Schlüsselwörter verwenden
//(var, function, let, usw.)

//b)
//Zuerst wird der Konsolenbefehl von x (Alles) ausgeführt, danach geht es mit der Funktion fuct1() weiter, wo dann der Konsolenbefehl "Klar?" ausgeführt wird.
//Nach dem Ende der Funktion geht der Code oben bei dem Konsolenbefehl "Logo!" weiter

//c)
function a3(): void {
    let y: string = "Alles Gute!";
    console.log(y);
    funct2();
    funct3();
}

a3();

function funct2(): void {
    console.log("Alles klar?");
}

function funct3(): void {
    console.log("Alles Logo!");
    
}

//Aufgabe 2
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();
// i wird in der do while-Schleife die ganze Zeit eine 1 abgezogen bis die Zahl gleich 0 ist
//9, 8, 7 , 6 ,5, 4, 3, 2, 1

//Aufgabe 4
let x: string = "Hallo";
console.log(x);
funct1(x);
console.log(x);
func2();
func3();
console.log(x);

function funct1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";  
}
//a)
//Hallo, Bla, Hallo, Blubb, Test

//b)
//Globale Variablen sind überall im gesamten Programm sichtbar und lokale nur in ihrem Kontext oder in ihrem Block sichtbar, in dem sie deklariert worden sind (z.B. Klassen, Attribute, Schleifen usw.)
//Falls globale und lokale Variablen den selben Namen haben, wird das Programm die lokale Variable bevorzugen
//Übergangsparameter sind lokale Variablen, welche auch die Funktion haben, Werte an eine Funktion zu übergeben
//Funktionen können Eingaben/ Übergabeparameter verarbeiten und außerdem Werte zurückgeben

//Aufgabe 5
//a)
function multiply(_num1: number, _num2: number): number {
    let ergebnis: number = _num1 * _num2;
    return ergebnis;   
}
console.log(multiply(5, 2)); //Wenn man eine Funktion aufrufen möchte -> Name der Funktion und evtl. noch die Werte der Parameter eingeben

