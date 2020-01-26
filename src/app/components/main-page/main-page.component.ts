import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlayersSearched} from '@models/players-searched.model';
import {TuscanService} from '../../services/tuscan.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, finalize, switchMap, tap} from 'rxjs/operators';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public nickname = '';
  filteredUsers: Observable<PlayersSearched>;
  usersForm: FormGroup;
  isSearching: boolean;
  private ENTER_KEY = 13;

  constructor(private router: Router, private tuscanService: TuscanService, private fb: FormBuilder, meta: Meta) {
    meta.addTags([
      { name: 'author',   content: 'tuscan.pro'},
      { name: 'keywords', content: 'faceit stats, faceit, statistics, stats, tuscan, csgo, faceit elo, elo, ranking, faceitstats'},
      { name: 'description', content: 'Completely free site for checking your Faceit level, ELO progress, match statistics and much more!' }
    ]);
  }

  ngOnInit() {
    this.usersForm = this.fb.group({
      userInput: null
    });

    this.filteredUsers = this.usersForm.get('userInput').valueChanges
      .pipe(
        tap(() => this.isSearching = true),
        debounceTime(150),
        switchMap(value => this.tuscanService.getPlayersSearchedPrompt(value)
          .pipe(
            finalize(() => this.isSearching = false),
          )
        )
      );
  }

  @HostListener('document:keydown', ['$event'])
  onEnterKey(event: KeyboardEvent) {
    if (event.keyCode === this.ENTER_KEY && this.hasInput()) {
      this.navigateToPlayerStats();
    }
  }

  navigateToPlayerStats() {
    if (this.usersForm.get('userInput').value.toString().length > 0) {
      this.router.navigateByUrl(`/player/${this.nickname}`);
    }
  }

  hasInput(): boolean {
    return this.nickname.length > 0;
  }
}
