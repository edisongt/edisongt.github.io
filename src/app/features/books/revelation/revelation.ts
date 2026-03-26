import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-revelation',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './revelation.html',
  styleUrl: './revelation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Revelation {
  readonly scenes = [
    { id: 'scene-intro',     label: '開場' },
    { id: 'scene-throne',   label: '天上的寶座' },
    { id: 'scene-seals',    label: '七封印' },
    { id: 'scene-dragon',   label: '龍與獸' },
    { id: 'scene-bowls',    label: '七碗審判' },
    { id: 'scene-jerusalem', label: '新耶路撒冷' },
  ];
}
