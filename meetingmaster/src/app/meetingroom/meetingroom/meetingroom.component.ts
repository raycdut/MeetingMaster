import {
  Company
} from '../../Models/Company';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Component,
  OnInit,
  TemplateRef
} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
@Component({
  selector: 'app-meetingroom',
  templateUrl: './meetingroom.component.html',
  styleUrls: ['./meetingroom.component.css']
})
export class MeetingroomComponent implements OnInit {
  public modalRef: BsModalRef;
  id: string; // company id
  currentCompany: Company;
  constructor(private route: ActivatedRoute,private modalService: BsModalService) {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    });

    this.currentCompany = this.GetCompanyInfo(this.id);

  }
  ngOnInit() {}

  GetCompanyInfo(id: string): Company {
    let c = new Company();
    c.id = this.id;
    c.name = "raycdut Company";
    return c;
  }
  public openModal(template: TemplateRef < any > ) {
    this.modalRef = this.modalService.show(template);
  }


}
