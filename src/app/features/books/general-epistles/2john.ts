import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-2john',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './2john.html',
  styleUrl: './2john.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondJohn {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-truth', label: '行在真理中' },
    { id: 'scene-command', label: '愛的命令' },
    { id: 'scene-deceivers', label: '迷惑人的' },
    { id: 'scene-abide', label: '持守教訓' },
    { id: 'scene-joy', label: '面對面的喜樂' },
  ];
}
