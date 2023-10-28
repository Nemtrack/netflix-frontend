import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  quote?: string;

  quotes: string[] = [
    `"You can't go in there. It's a no entrance zone!" - Security Guard in "The Forbidden Door"`,
    `"They say curiosity killed the cat, and that door is off-limits for a reason." - Detective Smith in "Closed Secrets"`,
    `"In this town, there are doors you just don't open. No entrance, no exceptions." - Mayor Johnson in "Secrets of Willow Creek"`,
    `"Sometimes, the best way to find out what's behind a 'no entrance' sign is to tear it down." - Rebel Leader in "The Revolution Begins"`,
    `"You see that door marked 'No Entrance'? Well, that's exactly where we need to go." - Adventurer in "The Quest for the Forbidden Chamber"`,
    `"You shall not pass!" - Gandalf in "The Lord of the Rings"`,
    `"Life is what happens when you're busy making other plans." - John Lennon, quoted in "Forrest Gump" (1994).`,
    `"I'm not bad. I'm just drawn that way." - Jessica Rabbit in "Who Framed Roger Rabbit" (1988).`,
    `"Houston, we have a problem." - Jim Lovell in "Apollo 13" (1995).`,
    `"I think, therefore I am." - René Descartes, quoted in various philosophical discussions.`,
    `"All big discoveries are the result of thought." - Alexander Graham Bell, quoted in "The Crown" TV series.`,
    `"We all make mistakes, but the best ones are learned from." - Terry Goodkind, quoted in "The Witcher" TV series.`,
    `"To err is human, but to really foul things up, you need a computer." - Paul R. Ehrlich, referenced in various movies and TV shows.`,
  ];

  ngOnInit(): void {
    this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
