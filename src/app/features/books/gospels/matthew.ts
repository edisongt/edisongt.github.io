import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-matthew',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './matthew.html',
  styleUrl: './matthew.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Matthew {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-sermon', label: '登山寶訓' },
    { id: 'scene-parables', label: '天國的比喻' },
    { id: 'scene-transfig', label: '登山變像' },
    { id: 'scene-cross', label: '十字架' },
    { id: 'scene-commission', label: '大使命' },
  ];
}
