import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-templatey',
  templateUrl: './profile-templatey.component.html',
  styleUrls: ['./profile-templatey.component.css']
})
export class ProfileTemplateyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = 'Amit Singh';
  address = 'Mikulova 1755/1a Chodov, 14900, Prague';
  phone = '+420 608596392';
  email = 'singhamit1299@gmail.com';
  dob = '28.12.1992';
  aboutText = "I bring over 2 years of experience in frontend development with a focus on Angular, combined with a keen eye for design. Beyond coding, I'm a sports enthusiast and a language learner, always seeking new challenges and opportunities.";
  experienceDetails: string[] = [
    'Sep 2022 - Current: Associate Software Engineer, DHI ITS, Prague(CZ)',
    'Sep 2019 - Aug 2022: IT Service Desk Analyst(Norwegian), DHI ITS, Prague(CZ)'
    
  ];
  
  educationItems: string[] = [
    'Sep 2014 - Jun 2016: Master in Business Administration, Czech University of Life Science, Prague (Czech Republic)',
    'May 2010 - Jun 2013: Bachelor of Commerce with Honours, University of Delhi, New Delhi (India)'
  ];

  skillsList: string[] = [
    'JavaScript', 'Angular13', 'Node.js', 'Angular Material', 'MySql', 'Figma'
  ];

  hobbiesList: string[] = [
    'Tennis', 'Fitness', 'Languages', 'Travelling', 'Cooking'
  ];
  
}
