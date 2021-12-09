"use strict";
/*Fésű Gábor, Vásárhelyi Ágoston ,Baráth Máté Szoft2/n 2021.12.02
* File: ButtonPanel.java
* Author: Fésű Gábor,Vásárhelyi Ágoston,Baráth Máté
* Copyright: 2021, Nagy János
* Group: SzoftII
* Date: 2021-12-02
* Github:
* Licenc: GNU GPL
*/
exports.__esModule = true;
exports.Cars = void 0;
var Cars = /** @class */ (function () {
    function Cars(id, plate, color, brand, year, capacity, fuel, price, sold) {
        this.id = id;
        this.plate = plate;
        this.color = color;
        this.brand = brand;
        this.year = year;
        this.capacity = capacity;
        this.fuel = fuel;
        this.price = price;
        this.sold = sold;
    }
    return Cars;
}());
exports.Cars = Cars;
