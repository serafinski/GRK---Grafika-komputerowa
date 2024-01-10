// Przeklejone z PDFa
var imgA;
var imgB; 

function setup() {
    createCanvas(512, 512);
    background(255);  
    imgA = createImage(512, 512);
    imgB = createImage(512, 512);
    imgA.loadPixels();
    imgB.loadPixels();
    var d = pixelDensity();
    for(let i=0; i < 512 * 512 * 4 * d; i += 4) {
        imgA.pixels[i] = 240;
        imgA.pixels[i + 1] = 250;
        imgA.pixels[i + 2] = 240;
        imgA.pixels[i + 3] = 255;
        imgB.pixels[i] = 240;
        imgB.pixels[i + 1] = 240;
        imgB.pixels[i + 2] = 250;
        imgB.pixels[i + 3] = 255;
    }
    imgA.updatePixels();
    imgB.updatePixels();
}

function draw() {
    if (!keyIsDown(32)) {
        image(imgA, 0, 0);
        text('Image A', 10, 20);
    } else {
        image(imgB, 0, 0);
        text('Image B', 10, 20);
    }
} 

//Funkcja ta ma zwracać tablicę jednowymiarową, 
function make_vector(x, y) {
    return [x, y, 1];
}


//img to obraz, na jakim chcemy rysować (imgA lub imgB), 
//vec to wektor, jaki ma być narysowany. 
function draw_vector(img, vec) {
    //Rysowanie wektora
    imgA.set(vec[0], vec[1], 0);
    //Aktualizacja bufora pamieci
    imgA.updatePixels();
}

function mouseDragged() {
    //Stworzenie wektora
    var vec = make_vector(mouseX, mouseY);
    //Przekazanie wektora do funkcji rysującej
    draw_vector(imgA, vec);
}