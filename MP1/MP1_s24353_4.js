function setup() {
    createCanvas(800, 600);
    noLoop();
}

function draw() {
    background(0);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            set(x, y, color(
                
                // Oblicza odległość piksela od środka płótna (używając wzoru na dystans w układzie współrzędnych). 
                // Odejmuje tę odległość od 255, co sprawia, że piksele bliżej środka płótna mają wyższą wartość czerwonego (mniejszy dystans daje większą wartość).
                255 - sqrt((x-width/2)*(x-width/2) + (y-height/2)*(y-height/2)),
                
                //Oblicza odległość piksela od środka płótna.
                //Im dalej piksel jest od środka, tym wyższa jest wartość zielonego (większy dystans daje większą wartość).
                sqrt((x-width/2)*(x-width/2) + (y-height/2)*(y-height/2)),
                
                //Ta część tworzy gradient liniowy od lewego górnego rogu do prawego dolnego.
                //Sumuje współrzędne x i y piksela, a następnie dzieli przez sumę szerokości i wysokości.
                //Wynik ten jest następnie mnożony przez 255, tworząc gradient niebieskiego koloru
                ((x + y)/(width + height))* 255));
        }
    }
    updatePixels();
}