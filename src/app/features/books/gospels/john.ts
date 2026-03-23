import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-john',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './john.html',
  styleUrl: './john.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class John {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-word', label: '道成肉身' },
    { id: 'scene-water', label: '活水' },
    { id: 'scene-light', label: '世界的光' },
    { id: 'scene-shepherd', label: '好牧人' },
    { id: 'scene-resurrection', label: '復活與生命' },
  ];
}
