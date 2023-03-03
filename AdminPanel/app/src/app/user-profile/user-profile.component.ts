import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  jwtData:any;
    test:any;
  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    localStorage.getItem("token");
        this.test=jwt_decode(localStorage.getItem("token"));
        this.profileService.userProfile(this.test.id).then((result:any)=>{
        this.jwtData=result.data;
         this.jwtData['file'] = this.jwtData.file ? `http://localhost:5000/image/userImage/${this.jwtData.file}`:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
        });
  }

  
}
