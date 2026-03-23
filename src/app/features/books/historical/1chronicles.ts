import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-1chronicles',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './1chronicles.html',
  styleUrl: './1chronicles.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstChronicles {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-genealogy', label: '家譜' },
    { id: 'scene-king', label: '大衛作王' },
    { id: 'scene-ark', label: '約櫃入耶路撒冷' },
    { id: 'scene-prepare', label: '預備建殿' },
    { id: 'scene-prayer', label: '大衛的禱告' },
  ];
}
