// Setup
function setup(){
    createCanvas(512, 512);
    background(255);
}

// Współrzędne początku i końca linii
var x0=-1;
var y0=-1;
var x1=-1;
var y1=-1;

// Kliknięcie myszką = zapisanie współrzędnych początku linii
function mousePressed() {
  x0 = mouseX;
  y0 = mouseY;
}

// Przeciągnięcie myszką = zapisanie współrzędnych końca linii
function mouseDragged() {
  x1 = mouseX;
  y1 = mouseY;
  background(255);
  noStroke();
  // Rysowanie kółka w miejscu kliknięcia
  fill('red');
  ellipse(x0-3, y0-3, 6);
  fill('green');
  ellipse(x1-3, y1-3, 6);
}

// Skasowanie ekranu i namalowanie linii
function mouseReleased() {
  background(255);
  loadPixels();
  draw_line();
  updatePixels();
}

// Zamalowywanie pikseli w odcieniach szarości
function set_pixel(x,y,c) {
  idx=(y * 512 + x) * 4;
  pixels[idx]=c;
  pixels[idx+1]=c;
  pixels[idx+2]=c;
  pixels[idx+3]=255;
}

// Funkcja do rysowania linii
function draw_line() {
    // Deklaracja zmiennych dx i dy, które reprezentują różnicę między końcowymi i początkowymi współrzędnymi x i y
    var dx = x1 - x0;
    var dy = y1 - y0;
   
    // Obliczenie współczynników a i b dla równania linii prostej y = ax + b
    var a = dy / dx;
    var b = y0 - a * x0;
   
    //console.log("a: " + a);
   
    // Jeśli x1 jest mniejsze od x0, zamieniamy je miejscami
    if(x1<x0){
     var tmp = x0;
     x0 = x1;
     x1 = tmp;
    }
   
    // Dla każdego x od x0 do x1 obliczamy odpowiadające mu y za pomocą równania linii prostej
    // Następnie ustawiamy piksel na pozycji (x, y) na wartość 123
     for(var x=x0; x<x1; x++){
        // Zaokrąglamy wartość y do najbliższej liczby całkowitej - zgodnosc z algorytmem Bresenhama
       var y = Math.round(a * x + b);
       set_pixel(x,y,123);
     }
   }