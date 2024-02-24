import {
  Component,
  HostBinding,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ModalService } from './shared/components/modal/services/modal.service';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { fade } from './shared/animations/fade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade],
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  firstName = 'Rainer';
  modalRef: ModalRef;
  subscribed: boolean = false;
  form: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Rainer', Validators.required],
      surName: ['', Validators.required],
      age: ['', Validators.required],
      info: [false],
    });
  }

  show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }

  submit(): void {
    console.log(this.form.value);
    this.modalRef.close();
  }
}
