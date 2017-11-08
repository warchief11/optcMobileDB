
import { UnitService } from './../shared/services/unit.service';
import { Component, OnInit } from '@angular/core';
import { Unit } from '../shared';

@Component({
    selector: 'unit-detail',    
    templateUrl : './unitDetail.component.html'
})
export class UnitDetailComponent implements OnInit {       
    unit: Unit = new Unit();
    unitId : number;
    constructor(
        private unitService : UnitService
    ){
        this.unitId = 1448;
    };

    ngOnInit(): void {
        this.unit = this.unitService.getSampleUnit();
    }

    public fetchNextChar(){
        this.unit = this.unitService.getSampleUnit();
    }

    public fetchChar(){
        this.unit = this.unitService.getUnit(this.unitId);
    }
};
