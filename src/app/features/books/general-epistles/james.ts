import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-james',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './james.html',
  styleUrl: './james.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class James {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-trials', label: '信心與試煉' },
    { id: 'scene-doers', label: '聽道行道' },
    { id: 'scene-works', label: '信心與行為' },
    { id: 'scene-tongue', label: '舌頭的力量' },
    { id: 'scene-patience', label: '忍耐等候' },
  ];
}
