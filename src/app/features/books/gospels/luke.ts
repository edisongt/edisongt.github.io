import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-luke',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './luke.html',
  styleUrl: './luke.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Luke {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-nativity', label: '降生' },
    { id: 'scene-mercy', label: '憐憫的比喻' },
    { id: 'scene-prayer', label: '禱告' },
    { id: 'scene-prodigal', label: '浪子回頭' },
    { id: 'scene-emmaus', label: '以馬忤斯路' },
  ];
}
