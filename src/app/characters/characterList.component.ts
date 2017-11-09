import { CharacterDetailComponent } from './characterDetail.component';
import { UnitService } from './../shared/services/unit.service';
import { Unit } from './../shared/models/unit';
import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
   selector:"character-list",
   templateUrl : "./characterList.component.html"
})
export class CharacterListComponent implements OnInit {
 
   characters:Unit[]
   characterListAsync: Observable<Unit[]>;
   
   constructor(private unitService:UnitService, private modalCtrl:ModalController){

   }

   ngOnInit(): void {
      this.getAllUnits();
   }

   getAllUnits = function(){
      this.characterListAsync = this.unitService.getAllUnits();
   }

   public showCharDetails = function(character: Unit){      
      console.log(character.name);    
      var charDetailModal = this.modalCtrl.create(CharacterDetailComponent, { character: character} );
      charDetailModal.present();      
   }
};