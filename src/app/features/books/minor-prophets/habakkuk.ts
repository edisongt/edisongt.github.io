import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-habakkuk',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './habakkuk.html',
  styleUrl: './habakkuk.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Habakkuk {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-question', label: '先知的質問' },
    { id: 'scene-answer', label: '神的回答' },
    { id: 'scene-watchtower', label: '守望樓上' },
    { id: 'scene-woes', label: '禍哉五訓' },
    { id: 'scene-prayer', label: '先知的禱告' },
  ];
}
