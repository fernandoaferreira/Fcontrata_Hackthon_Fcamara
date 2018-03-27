import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  json: { "firstName": string; 
  "headline": string; 
  "id": string; "lastName": string;
  "score": string;
   "keywords": string[];
    "siteStandardProfileRequest": { "url": string; }; }[];
  constructor(public navCtrl: NavController  ) {

  

  this.json = [
    
    {

    "firstName": "Rodrigo",
    "headline": "Desenvolvedor MercadoLivre",
    "id": "1R2RtA",
    "score": "98%",
    "lastName": "Gallinati",
    "keywords": ["ionic", "nodejs", "nodered", "vue", "visusal code", "São Paulo"], 
    "siteStandardProfileRequest": {
      "url": "https://www.linkedin.com/in/rodrigo-gallinati-64390878/"
    }
  },

  {
    "firstName": "Getulio",
    "headline": "Head of UX",
    "id": "1R2RtA",
    "score": "85%",
    "lastName": "Lima",
    "keywords": ["Ionic", "nodejs", "nodered", "vue", "visual code", "Santos"], 
    "siteStandardProfileRequest": {
      "url": "https://www.linkedin.com/in/getuliolima/"
    }
  },

  {
    "firstName": "Anderson",
    "headline": "Programador ABAP",
    "id": "1R2RtA",
    "score": "76%",
    "lastName": "Lima",
    "keywords": ["Ionic", "vue", "Santos"], 
    "siteStandardProfileRequest": {
      "url": "https://www.linkedin.com/in/andersonlimaabap/"
    }
  },

  {
    "firstName": "Stefano",
    "headline": "QA Tester",
    "id": "1R2RtA",
    "score": "67%",
    "lastName": "Zanchetta",
    "keywords": ["nodejs", "vue", "visual code", "São Paulo"], 
    "siteStandardProfileRequest": {
      "url": "https://www.linkedin.com/in/stefano-marcon-zanchetta-42543a54/"
    }
  },
    
    {
    "firstName": "Iara",
    "headline": "Desenvolvedor Java",
    "id": "1R2RtA",
    "score": "53%",
    "lastName": "Bugiani",
    "keywords": ["Ionic", "nodejs", "nodered", "visual code", "São Paulo"], 
    "siteStandardProfileRequest": {
      "url": "https://www.linkedin.com/in/iara-bugiani-bb9490b1/"
    }
  }
  
  ]


  }
}
       
    


