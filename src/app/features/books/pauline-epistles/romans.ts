import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-romans',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './romans.html',
  styleUrl: './romans.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Romans {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-gospel', label: '福音的大能' },
    { id: 'scene-sin', label: '罪與稱義' },
    { id: 'scene-grace', label: '恩典與盼望' },
    { id: 'scene-spirit', label: '聖靈的生命' },
    { id: 'scene-mercy', label: '活祭與憐憫' },
  ];
}
