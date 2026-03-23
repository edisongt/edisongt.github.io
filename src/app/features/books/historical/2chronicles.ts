import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-2chronicles',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './2chronicles.html',
  styleUrl: './2chronicles.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondChronicles {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-dedication', label: '聖殿落成' },
    { id: 'scene-jehoshaphat', label: '約沙法的戰役' },
    { id: 'scene-repair', label: '約阿施修殿' },
    { id: 'scene-revival', label: '希西家的復興' },
    { id: 'scene-exile', label: '被擄巴比倫' },
  ];
}
