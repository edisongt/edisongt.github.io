import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-3john',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './3john.html',
  styleUrl: './3john.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdJohn {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-gaius', label: '該猶的忠心' },
    { id: 'scene-hospitality', label: '接待弟兄' },
    { id: 'scene-diotrephes', label: '丟特腓的傲慢' },
    { id: 'scene-demetrius', label: '低米丟的見證' },
    { id: 'scene-good', label: '行善效法神' },
  ];
}
