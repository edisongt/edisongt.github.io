import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-ezekiel',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './ezekiel.html',
  styleUrl: './ezekiel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ezekiel {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-creatures', label: '四活物異象' },
    { id: 'scene-watchman', label: '守望者' },
    { id: 'scene-bones', label: '枯骨復生' },
    { id: 'scene-temple', label: '新聖殿' },
    { id: 'scene-glory', label: '神榮耀歸回' },
  ];
}
