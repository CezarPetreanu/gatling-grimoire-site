import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'how-to-play-page',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './how-to-play-page.component.html',
  styleUrl: './how-to-play-page.component.css',
})
export class HowToPlayPageComponent {
  pages = [
    {
      title: '1. Scatter the pages',
      description:
        'Shuffle the deck and deal the cards equally to the players (mages) face down. In case of a 3-player game, discard the remaining card.',
    },
    {
      title: '2. The round begins',
      description:
        'The players take turns clockwise. The first player is the attacker: draw a card from the top of the deck, look up the number in the Grimoire and arrange the bullets as show in the pattern.',
    },
    {
      title: '3. Roll the dice',
      description:
        'The other players roll their dice from the bottom of the board, in the order of their turns. Be careful not to touch the bullets!',
    },
    {
      title: '4. You got hit!',
      description:
        "If the die touches a bullet, the attacker gains a number of cards from the player's deck equal to the number on the die (plus the power of the card's suit).",
    },
    {
      title: '5. Increase your power',
      description:
        'You gain mana based on how far your die goes on the battle board. At the end of a turn, you can use 2 MN to increase the power of one of your suits.',
    },
    {
      title: '6. Conquer the Grimoire',
      description:
        'A mage with no cards left is out of the game. The last mage conquers the Gatling Grimoire. Good Luck!',
    },
  ];

  images = [
    'images/step1.jpg',
    'images/step2.jpg',
    'images/step3.jpg',
    'images/step4.jpg',
    'images/step5.jpg',
    'images/step6.jpg',
  ];

  currentIndex = 0;
  currentTitle = this.pages[this.currentIndex].title;
  currentDescription = this.pages[this.currentIndex].description;
  currentPage = this.currentIndex + 1;
  currentImage = this.images[this.currentIndex];

  previousPage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updatePageContent();
    }
  }

  nextPage() {
    if (this.currentIndex < this.images.length - 1) {
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
}
