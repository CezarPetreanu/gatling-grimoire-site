import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'the-grimoire-page',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatListModule,
    ScrollingModule,
    CommonModule,
  ],
  templateUrl: './the-grimoire-page.component.html',
  styleUrls: ['./the-grimoire-page.component.css'],
})
export class TheGrimoirePageComponent {
  pages = [
    {
      title: '1. A paper divided in three parts',
      description:
        'This will be the battle board, where the duel’s action takes place.',
    },
    {
      title: '2. A deck of cards',
      description:
        'This is your fragment of the Gatling Grimoire. Each card represents a page that contains a pattern (the number) and an aspect (the suit). Use them to unleash your attacks.',
    },
    {
      title: '3. Six sided dice',
      description:
        'Mages are represented by this humble object. During the duel, you have to roll and dodge through volleys of bullets.',
    },
    {
      title: '4. Eight small objects',
      description:
        'Each page of the Grimoire launches a number of magical bullets in various patterns. Arrange the bullets on the battle board and see your opponents try to avoid them. Be careful not to touch them. Hitting a bullet will make you lose pages!',
    },
    {
      title: '5. Pen and paper',
      description:
        'Mages will have to keep track of their spell power, strengths and weaknesses during the duel.',
    },
  ];

  images = [
    'images/battleboard.png',
    'images/cards.png',
    'images/dice.png',
    'images/dice2.png',
    'images/penpaper.png',
    'images/booklet.png',
  ];

  patternTitles = [
    'Gatling',
    'Block',
    'Slash',
    'Pierce',
    'Strike',
    'Jaw',
    'Star',
    'Passage',
    'Hall',
    'Cage',
    'Cone',
    'Breach',
    'Denial',
  ];

  patterns = [
    'images/1 - GATLING.png',
    'images/2 - BLOCK.png',
    'images/3 - SLASH.png',
    'images/4 - PIERCE.png',
    'images/5 - STRIKE.png',
    'images/6 - JAW.png',
    'images/7 - STAR.png',
    'images/8 - PASSAGE.png',
    'images/9 - HALL.png',
    'images/10 - CAGE.png',
    'images/11 - CONE.png',
    'images/12 - BREACH.png',
    'images/13 - LIMIT.png',
  ];

  currentIndex = 0;
  currentTitle = this.pages[this.currentIndex].title;
  currentDescription = this.pages[this.currentIndex].description;
  currentPage = this.currentIndex + 1;
  currentImage = this.images[this.currentIndex];

  currentPatternIndex = 0;
  currentPatternTitle = this.patternTitles[this.currentPatternIndex];
  currentPatternImage = this.patterns[this.currentPatternIndex];

  previousPage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updatePageContent();
    }
  }

  nextPage() {
    if (this.currentIndex < this.pages.length - 1) {
      this.currentIndex++;
      this.updatePageContent();
    }
  }

  updatePageContent() {
    this.currentTitle = this.pages[this.currentIndex].title;
    this.currentDescription = this.pages[this.currentIndex].description;
    this.currentPage = this.currentIndex + 1;
    this.currentImage = this.images[this.currentIndex];
  }

  selectPattern(index: number) {
    this.currentPatternIndex = index;
    this.currentPatternTitle = this.patternTitles[index];
    this.currentPatternImage = this.patterns[index];
  }
}
