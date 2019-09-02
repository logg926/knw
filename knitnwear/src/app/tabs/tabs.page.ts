import { Component } from '@angular/core';
import { Imgstore } from 'src/service/imgstore.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(

    public imgstore: Imgstore, 
  ) {}

}
