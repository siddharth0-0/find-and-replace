import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-replace',
  templateUrl: './find-replace.component.html',
  styleUrls: ['./find-replace.component.scss']
})

export class FindReplaceComponent implements OnInit {

  text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  showInput: boolean = true;

  find: string = '';
  replace: string = '';

  private wordList: string[] = [
    'summer', 'winter', 'rainy', 'cloudy', 'castle', 'a', 'in', 'that', 'have', 'I',
    'it', 'for', 'not', 'on', 'the', 'he', 'as', 'you', 'do', 'at',
    'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she',
    'Sam', 'White', 'Harris', 'John', 'Jane', 'Allen', 'King', 'Adams', 'Nelson'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  continue() {
    console.log(this.text);
    this.showInput = false;
  }

  generateString() {
    this.text = '';
    for (let i = 0; i < 30; i++) {
      this.text += this.wordList[Math.floor(Math.random() * this.wordList.length)] + ' ';
    }
    this.text = this.text.trim();
  }

  getHighlightedText() {
    if (!this.find || !this.text) return this.text;

    const regex = new RegExp(`(${this.escapeRegExp(this.find)})`, 'gi');
    return this.text.replace(regex, '<span class="highlighted">$1</span>');
  }

  private escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  replaceText() {
    if (!this.find || !this.replace) return;
    this.text = this.text.replace(this.find, this.replace);
  }

  replaceAllText() {
    if (!this.find || !this.replace) return;
    const regex = new RegExp(this.escapeRegExp(this.find), 'g');
    this.text = this.text.replace(regex, this.replace);
    this.replace = '';
  }

  getMatchCount(): number {
    if (!this.find || !this.text) return 0;
    
    const regex = new RegExp(this.escapeRegExp(this.find), 'gi');
    const matches = this.text.match(regex);
    return matches ? matches.length : 0;
  }

  editText() {
    this.showInput = true;
    this.find = '';
    this.replace = '';
  }
}
