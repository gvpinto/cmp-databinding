import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() streamTicks = new EventEmitter<number>();
  @Output() tickerListClear = new EventEmitter();
  ticker: number = 0;
  tickerRef = null;
  constructor() {}

  ngOnInit(): void {}

  onStart(event: any): void {
    this.tickerRef = setInterval(() => {
      this.streamTicks.emit(this.ticker++);
    }, 1000);
  }

  onStop(event: any): void {
    clearInterval(this.tickerRef);
    this.tickerListClear.emit();
    this.ticker = 0;
  }
}
