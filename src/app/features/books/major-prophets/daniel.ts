import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-daniel',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './daniel.html',
  styleUrl: './daniel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Daniel {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-furnace', label: '火窯試煉' },
    { id: 'scene-lions', label: '獅子坑' },
    { id: 'scene-statue', label: '巨像異象' },
    { id: 'scene-sonofman', label: '人子異象' },
    { id: 'scene-kingdom', label: '永恆國度' },
  ];
}
