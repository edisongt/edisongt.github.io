import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-hosea',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './hosea.html',
  styleUrl: './hosea.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hosea {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-unfaithful', label: '不忠的妻子' },
    { id: 'scene-accusation', label: '控訴以色列' },
    { id: 'scene-judgment', label: '審判將臨' },
    { id: 'scene-love', label: '神不變的愛' },
    { id: 'scene-return', label: '回轉與復興' },
  ];
}
