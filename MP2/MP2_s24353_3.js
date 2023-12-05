function preload(){0
    //Ładowanie obrazka
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png")
    //Tworzenie 3 pustych obrazków
    img_r = createImage(256, 256);
    img_g = createImage(256, 256);
    img_b = createImage(256, 256);
  }
  
function setup(){
    //Tworzenie płótna
    createCanvas(512, 512);
    //Zmienienie rozmiaru ładowanego obrazka do 256x256
    img.resize(256, 256);
    
    //Załadowanie pixeli obrazków do tabeli
    img.loadPixels();
    img_r.loadPixels();
    img_g.loadPixels();
    img_b.loadPixels()

    //pętla na separacje kanałów RBB
    for(x=0; x<img.width; x++){
        for(y=0;y<img.height;y++){
            //kalkulacja pozycji piksela
            pos = 4*(y*img.width+x);

            //przypisanie wartości piksela do danego obrazka
            img_r.pixels[pos] = img.pixels[pos]   //red
            img_g.pixels[pos+1] = img.pixels[pos+1] //green
            img_b.pixels[pos+2] = img.pixels[pos+2] //blue

            //Ustawienie wartości alfa na 255 - pełna wartość = nieprzezroczysty
            img_r.pixels[pos+3] = 255;
            img_g.pixels[pos+3] = 255;
            img_b.pixels[pos+3] = 255;       
        }
    }
    
    //Aktualizacja obrazków po zmianach
    img.updatePixels();
    img_r.updatePixels();
    img_b.updatePixels();
    img_g.updatePixels();
    
    //Wyświetlenie czerwonego, zielonego i niebieskiego obrazka
    image(img_r, 0,0);
    image(img_g, 256, 0);
    image(img_b, 0, 256);
    
    //Tworzenie obrazka do którego będą dodawane obrazki
    img_sum = createImage(256,256);
    
    //Łączenie obrazków w jeden obrazek 
    img_sum.blend(img_r,0,0,256,256,0,0,256,256,ADD);
    img_sum.blend(img_g,0,0,256,256,0,0,256,256,ADD);
    img_sum.blend(img_b,0,0,256,256,0,0,256,256,ADD);
  
    //Wyświetlenie końcowego obrazka
    image(img_sum, 256, 256);     
}

function draw(){
    //noprotect
}