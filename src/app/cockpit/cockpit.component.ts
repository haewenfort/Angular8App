import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerContent = "";
  newServerName = "";

  constructor() { }

  ngOnInit() {
  }

  onAddServer(dataElementName,dataElementContent) {
    this.serverCreated.emit({ 
      serverName: dataElementName.value, 
      serverContent: dataElementContent.value
    });
  }

  onAddBlueprint(dataElementName,dataElementContent) { 
    this.blueprintCreated.emit({ 
      serverName: dataElementName.value, 
      serverContent: dataElementContent.value
    });
  }
}
