/*Fésű Gábor, Vásárhelyi Ágoston ,Baráth Máté Szoft2/n 2021.12.02  
* File: ButtonPanel.java
* Author: Fésű Gábor,Vásárhelyi Ágoston,Baráth Máté
* Copyright: 2021, Nagy János
* Group: SzoftII
* Date: 2021-12-02
* Github: 
* Licenc: GNU GPL
*/

import { Cars } from './car.js';

let kocsi1 = new Cars(1,"abc-123","hite","toyota",2004,50,"benzin",60000,false);

/*kocsi1.id = 1;
kocsi1.plate = "ABC-123";
kocsi1.color = "white"; 
kocsi1.brand = "Toyota";
kocsi1.year = 2004;
kocsi1.capacity = 50;
kocsi1.fuel = "benzin";  
kocsi1.price = 600000;
kocsi1.sold = false;*/


const ul = document.querySelector("#car");
const p = document.createElement("p");
p.textContent = "Fésű Gábor,Vásárhelyi Ágoston,Baráth Máté 2021 12 02 Szoft2/N";
ul.appendChild(p);
/*
for (let entry in kocsi1) {
    const li = document.createElement("li");
    li.textContent = entry;
    ul.appendChild(li);
    console.log(entry); 
}*/

for (const [key, value] of Object.entries(kocsi1)) {
    console.log(`${key}: ${value}`);
    const li = document.createElement("li");
    li.textContent =key+": "+value;
    ul.appendChild(li);
}

 
