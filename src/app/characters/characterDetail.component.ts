
import { UnitService } from './../shared/services/unit.service';
import { Component, OnInit } from '@angular/core';
import { Unit } from '../shared';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'unit-detail',    
    templateUrl : './characterDetail.component.html'
})
export class CharacterDetailComponent implements OnInit {       
    unit: Unit = new Unit();
    unitId : number;
    constructor(
        private unitService : UnitService,
        private viewCtrl : ViewController,
        params: NavParams
    ){
        this.unit = params.get('character');
    };

    ngOnInit(): void {
        if(this.unit){
            this.unit = this.unitService.getUnit(this.unit.unitId);            
        }
    }

    // public fetchNextChar(){
    //     this.unit = this.unitService.getSampleUnit();
    // }

    // public fetchChar(){
    //     this.unit = this.unitService.getUnit(this.unitId);
    // }

    public dismiss(){
        this.viewCtrl.dismiss();
    }
};
