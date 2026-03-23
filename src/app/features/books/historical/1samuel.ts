import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-1samuel',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './1samuel.html',
  styleUrl: './1samuel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstSamuel {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-birth', label: '撒母耳出生' },
    { id: 'scene-ark', label: '約櫃被擄' },
    { id: 'scene-saul', label: '掃羅受膏' },
    { id: 'scene-david', label: '大衛與歌利亞' },
    { id: 'scene-fall', label: '掃羅的墮落' },
  ];
}
