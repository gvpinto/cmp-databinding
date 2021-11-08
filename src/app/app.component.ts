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

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

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

  addTick(ticker: number) {
    if (ticker % 2 == 0) {
      this.evenNumbers.push(ticker);
    } else {
      this.oddNumbers.push(ticker);
    }
  }

  clearTicker(): void {
    this.oddNumbers = [];
    this.evenNumbers = [];
  }
}
