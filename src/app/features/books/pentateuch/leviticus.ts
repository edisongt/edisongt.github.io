import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-leviticus',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './leviticus.html',
  styleUrl: './leviticus.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Leviticus {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-offerings', label: '五大祭' },
    { id: 'scene-priesthood', label: '祭司制度' },
    { id: 'scene-atonement', label: '贖罪日' },
    { id: 'scene-holiness', label: '聖潔律例' },
    { id: 'scene-feasts', label: '節期' },
  ];
}
