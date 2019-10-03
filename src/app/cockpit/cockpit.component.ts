import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

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
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(dataElementName: HTMLInputElement) {
    this.serverCreated.emit({ 
      serverName: dataElementName.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(dataElementName) { 
    this.blueprintCreated.emit({ 
      serverName: dataElementName.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
