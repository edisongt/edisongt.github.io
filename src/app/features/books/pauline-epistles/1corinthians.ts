import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-1corinthians',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './1corinthians.html',
  styleUrl: './1corinthians.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstCorinthians {
  readonly scenes = [
    { id: 'scene-1', label: '開場' },
    { id: 'scene-2', label: '第二幕' },
    { id: 'scene-3', label: '第三幕' },
    { id: 'scene-4', label: '第四幕' },
    { id: 'scene-5', label: '第五幕' },
    { id: 'scene-6', label: '第六幕' },
  ];
}
