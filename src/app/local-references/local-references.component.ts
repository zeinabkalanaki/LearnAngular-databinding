import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-local-references',
  templateUrl: './local-references.component.html',
  styleUrls: ['./local-references.component.css']
})
export class LocalReferencesComponent implements OnInit {

  @ViewChild('elementContent') elementContent: ElementRef
  constructor() { }

  ngOnInit() {
  }

  onShowElementContent() {
    alert(this.elementContent.nativeElement.value);
  }
}
