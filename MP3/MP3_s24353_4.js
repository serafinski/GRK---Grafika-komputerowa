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
function set_pixel(x, y, c) {
    idx = (y * 512 + x) * 4;
    pixels[idx] = c;
    pixels[idx + 1] = c;
    pixels[idx + 2] = c;
    pixels[idx + 3] = 255;
}

// Funkcja do rysowania linii
function draw_line() {
    // Deklaracja zmiennych dx i dy, które reprezentują różnicę między końcowymi i początkowymi współrzędnymi x i y
    var dx = x1 - x0;
    var dy = y1 - y0;
   
    // Obliczenie współczynników a i b dla równania linii prostej y = ax + b
    var a = dy / dx;
    var b = y0 - a * x0;
   
    // Inicjalizacja zmiennych dp, deq i dinc, które są używane do obliczania nowych wartości d
    var dp = 2 * dy - dx;
    var deq = 2 * dy;
    var dinc = 2 * dy - 2 * dx;

    // Inicjalizacja zmiennej d wartością dp
    var d = dp;
    // Inicjalizacja zmiennej y wartością y0 zaokrągloną do najbliższej liczby całkowitej
    var y = Math.round(y0);

    // Dla każdego x od x0 do x1 (włącznie)
    for(x=x0; x<=x1; x++){
        // Ustawiamy piksel na pozycji (x, y) na wartość 0
        set_pixel(x,Math.round(y),0);
        // Jeśli d jest mniejsze od 0, dodajemy do niego wartość deq
        if (d < 0) {
          d += deq;
        } else {
          // W przeciwnym razie dodajemy do d wartość dinc i zwiększamy y o 1
          d += dinc;
          y += 1;
        }
      }
}