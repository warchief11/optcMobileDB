import { CharacterDetailComponent } from './characterDetail.component';
import { UnitService } from './../shared/services/unit.service';
import { Unit } from './../shared/models/unit';
import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
@Component({
   selector:"character-list",
   templateUrl : "./characterList.component.html"
})
export class CharacterListComponent implements OnInit {
 
   characters:Unit[]
   constructor(private unitService:UnitService, private modalCtrl:ModalController){

   }

   ngOnInit(): void {
      this.characters = this.unitService.units;
   }

   getAllUnits = function(){
      this.characters = this.unitService.units;
   }

   public showCharDetails = function(character: Unit){      
      console.log(character.name);    
      var charDetailModal = this.modalCtrl.create(CharacterDetailComponent, { character: character} );
      charDetailModal.present();      
   }
};