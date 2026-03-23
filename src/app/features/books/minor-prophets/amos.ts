import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-amos',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './amos.html',
  styleUrl: './amos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Amos {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-shepherd', label: '牧人先知' },
    { id: 'scene-judgment', label: '列國的審判' },
    { id: 'scene-justice', label: '公義如大水' },
    { id: 'scene-plumbline', label: '鉛錘的異象' },
    { id: 'scene-restoration', label: '復興的應許' },
  ];
}
