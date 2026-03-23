import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-1kings',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './1kings.html',
  styleUrl: './1kings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstKings {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-wisdom', label: '所羅門的智慧' },
    { id: 'scene-temple', label: '建造聖殿' },
    { id: 'scene-sheba', label: '示巴女王來訪' },
    { id: 'scene-division', label: '國度分裂' },
    { id: 'scene-carmel', label: '迦密山對決' },
  ];
}
