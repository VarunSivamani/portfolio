import { Component } from '@angular/core';
import { EXPERIENCES } from '../data/experience-data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
}
