import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-micah',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './micah.html',
  styleUrl: './micah.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Micah {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-judgment', label: '審判撒馬利亞' },
    { id: 'scene-require', label: '神所要的' },
    { id: 'scene-bethlehem', label: '伯利恆的預言' },
    { id: 'scene-peace', label: '刀打成犁頭' },
    { id: 'scene-mercy', label: '赦免與憐憫' },
  ];
}
