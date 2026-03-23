import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-judges',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './judges.html',
  styleUrl: './judges.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Judges {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-deborah', label: '底波拉' },
    { id: 'scene-gideon', label: '基甸' },
    { id: 'scene-samson', label: '參孫' },
    { id: 'scene-cycle', label: '罪的循環' },
    { id: 'scene-darkness', label: '黑暗時代' },
  ];
}
