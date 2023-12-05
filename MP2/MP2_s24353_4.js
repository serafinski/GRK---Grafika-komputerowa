function preload(){0
    //Ładowanie obrazka
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png")
    //Tworzenie 3 pustych obrazków
    img_h = createImage(256, 256);
    img_s = createImage(256, 256);
    img_v = createImage(256, 256);
  }
  
function setup(){
    //Tworzenie płótna
    createCanvas(512, 512);
    //Zmienienie rozmiaru ładowanego obrazka do 256x256
    img.resize(256, 256);
    
    //Załadowanie pixeli obrazków do tabeli
    img.loadPixels();
    img_h.loadPixels();
    img_s.loadPixels();
    img_v.loadPixels()

    //pętla na separacje kanałów
    for(x=0; x<img.width; x++){
        for(y=0;y<img.height;y++){
            //kalkulacja pozycji piksela
            pos = 4*(y*img.width+x);

            //Normalizacja wartości rgb do wartości 0/1
            r = img.pixels[pos]/255;
            g = img.pixels[pos+1]/255;
            b = img.pixels[pos+2]/255;
            
            //Wyliczenie maksymalnej składowej RBG
            cmax = Math.max(r,g,b);
            //Wyliczenie minimalnej składowej RBG
            cmin = Math.min(r,g,b);
            
            //Wyliczenie wartości V
            v=cmax;
            
            //Wyliczenie wartości chromatyczności
            c=cmax-cmin;

            //Wyliczenie wartości saturacji
            if (cmax == 0) {
                s = 0;
            } else {
                s = c / cmax;
            }


            
            //Ustawienie jasnosci pixela na zdjeciu (używająć v)
            img_v.set(x,y,255*v);

            //Ustawienie saturacji pixela na zdjeciu (używająć s)
            img_s.set(x,y,255*s);
        }
    }
    
    //Aktualizacja obrazków po zmianach
    img.updatePixels();
    img_h.updatePixels();
    img_s.updatePixels();
    img_v.updatePixels();
    
    //Wyświetlenie czerwonego, zielonego i niebieskiego obrazka
    image(img_h, 0,0);
    image(img_s, 256, 0);
    image(img_v, 0, 256);
    image(img, 256,256);
}

function draw(){
    //noprotect
}