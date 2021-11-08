import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "TestServer", content: "Just a Test!" },
  ];

  tickerList = [];

  addServer(server: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: server.serverName,
      content: server.serverContent,
    });
  }

  addBlueprint(blueprint: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprint.serverName,
      content: blueprint.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed!";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  addTick(ticker: { value: number }) {
    this.tickerList.push(ticker.value);
  }

  clearTicker(): void {
    this.tickerList = [];
  }
}
