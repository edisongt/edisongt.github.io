import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-malachi',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './malachi.html',
  styleUrl: './malachi.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Malachi {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-covenant', label: '破壞的約' },
    { id: 'scene-refiner', label: '煉金之人的火' },
    { id: 'scene-tithe', label: '十分之一' },
    { id: 'scene-remember', label: '記念冊' },
    { id: 'scene-sun', label: '公義的日頭' },
  ];
}
