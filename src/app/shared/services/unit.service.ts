import { Injectable, OnInit } from "@angular/core";
import { Unit } from "../index";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';


@Injectable()
export class UnitService implements OnInit {
    public units: Unit[];
    constructor(
        private http: Http
    ) {
        this.getAllUnits();
    }

    ngOnInit() {
        this.getAllUnits();
    }


    private getGlobalThumbnailUrl = function (n: number, isIncomplete: boolean = false): string {
        if (n === null || n === undefined || isIncomplete)
            return 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';
        var id = ('0000' + n).slice(-4).replace(/(057[54])/, '0$1');
        if (Number(id) == 530) {
            return 'https://onepiece-treasurecruise.com/wp-content/uploads/sites/2/f0529.png';
        }
        else if (Number(id) == 529) {
            return 'https://onepiece-treasurecruise.com/wp-content/uploads/sites/2/f0530.png';
        }
        return 'https://onepiece-treasurecruise.com/wp-content/uploads/sites/2/f' + id + '.png';
    };

    public getUnit = function (unitId: number): Unit {
        if (this.units) {
            console.log("getting unit");
            console.log(unitId);
            var unit = this.units[unitId - 1];
            console.log(unit.unitId);
            console.log(unit.id);
            console.log(unit);
            return unit;
        }
    }
    public getSampleUnit = function (): Unit {
        var unit = new Unit();
        if (this.units) {
            var randomIndex = Math.floor(Math.random() * this.units.length);
            return this.getUnit(randomIndex);        

        }
        // this.http.get('./app/shared/data/units.json').map(res => {
        //      console.log("testing log sucess");
        //      console.log(res);
        //     return res.json()
        // }).catch(e =>{
        //     console.log("some error occured")
        //     console.log(e)
        // });;
        return unit;
    };

    public getAllUnits = function (): Observable<Unit[]> {
        var unitsObservable = this.http.get('assets/data/units.json');
        //  unitsObservable.subscribe(res => {
        //     console.log("testing log sucess");
        //     var data = res.json();
        //     this.units = this.parseUnits(data, true);
        // });
        return unitsObservable.map(response => response.json().map(item => this.parseUnit(item)));
    };

    private parseUnit = function (element: any[], id): Unit {
        var unit: Unit = new Unit();
        if (element.length > 0) {
            unit.name = element[0];
            unit.type = element[1];
            if (element[2] instanceof Array) {
                unit.class1 = element[2][0];
                if (element[2].length > 1) {
                    unit.class2 = element[2][1];
                }
            } else {
                unit.class1 = element[2];
            }

            unit.stars = element[3];
            unit.cost = element[4];
            unit.combo = element[5];
            unit.slots = element[6];
            unit.maxLevel = element[7];
            unit.expToMax = element[8];
            unit.minHP = element[9];
            unit.minATK = element[10];
            unit.minRCV = element[11];
            unit.maxHP = element[12];
            unit.maxATK = element[13];
            unit.maxRCV = element[14];
            unit.unitId = id + 1;
            if (id === null || id === undefined)
                unit.imgThumbNail = 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';
            var id1 = ('0000' + unit.unitId).slice(-4);
            unit.imgThumbNail = 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + id1 + '.png';

        }else{
            console.error("no value found in element :" + element);
        }
        return unit;
    };

    private parseUnits = function (units, skipIncomplete) {
        if (skipIncomplete) {
            // units = units.map(function (x, n) {
            //     if (x.indexOf(null) == -1)
            //         return x;
            //     var viable = x[9] && x[10] && x[11] && x[12] && x[13] && x[14];
            //     return viable ? x : [];
            // });
            units = units.filter(x => x[0]);
        }
        return units.map(this.parseUnit);
    };

}
