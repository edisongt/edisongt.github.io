import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-ruth',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './ruth.html',
  styleUrl: './ruth.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ruth {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-naomi', label: '拿俄米歸回' },
    { id: 'scene-gleaning', label: '拾穗' },
    { id: 'scene-threshing', label: '打穀場' },
    { id: 'scene-redemption', label: '救贖' },
    { id: 'scene-lineage', label: '家譜·盼望' },
  ];
}
