import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-acts',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './acts.html',
  styleUrl: './acts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Acts {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-pentecost', label: '五旬節' },
    { id: 'scene-church', label: '初代召會' },
    { id: 'scene-stephen', label: '司提反殉道' },
    { id: 'scene-conversion', label: '保羅歸信' },
    { id: 'scene-mission', label: '福音廣傳' },
  ];
}
