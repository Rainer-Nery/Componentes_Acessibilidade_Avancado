import { Component, HostBinding, OnInit } from '@angular/core';
import { ModalConfig } from './interfaces/modal-config';
import { fade } from '../../animations/fade';
import { ModalRef } from './models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent implements OnInit {

  @HostBinding('@fade') fade = true;
  
  public config: ModalConfig;
  public modalRef: ModalRef;

  constructor() {}

  ngOnInit(): void {}
}
