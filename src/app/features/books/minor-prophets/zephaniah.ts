import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-zephaniah',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './zephaniah.html',
  styleUrl: './zephaniah.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Zephaniah {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-judgment', label: '全地的審判' },
    { id: 'scene-greatday', label: '耶和華的大日' },
    { id: 'scene-seek', label: '尋求耶和華' },
    { id: 'scene-remnant', label: '謙卑的餘民' },
    { id: 'scene-joy', label: '神的歡喜歌唱' },
  ];
}
