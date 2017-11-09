import { IonicModule } from 'ionic-angular';
//import { UnitService } from './../shared/services/unit.service';
import { NgModule } from '@angular/core';

//import components

import { CharacterDetailComponent } from './characterDetail.component';
import { CharacterListComponent } from './characterList.component';

@NgModule({
    declarations:[
        CharacterDetailComponent,
        CharacterListComponent
    ],
    imports: [ IonicModule.forRoot(CharacterListComponent) ],
    exports:[
        CharacterDetailComponent,
        CharacterListComponent
    ],
    entryComponents:[
        CharacterDetailComponent
    ],
    providers:[
        
    ]
})
export class CharacterModule {}