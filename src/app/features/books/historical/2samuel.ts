import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-2samuel',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './2samuel.html',
  styleUrl: './2samuel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondSamuel {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-coronation', label: '大衛登基' },
    { id: 'scene-ark', label: '約櫃進耶路撒冷' },
    { id: 'scene-bathsheba', label: '拔示巴事件' },
    { id: 'scene-absalom', label: '押沙龍叛亂' },
    { id: 'scene-covenant', label: '神的約' },
  ];
}
