import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-1timothy',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './1timothy.html',
  styleUrl: './1timothy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstTimothy {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-order', label: '召會的秩序' },
    { id: 'scene-prayer', label: '代禱的呼召' },
    { id: 'scene-leader', label: '長老與執事' },
    { id: 'scene-godly', label: '敬虔的操練' },
    { id: 'scene-content', label: '知足是大益處' },
  ];
}
