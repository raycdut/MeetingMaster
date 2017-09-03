import {
  ActivatedRoute
} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-meetingroom-current',
  templateUrl: './meetingroom-current.component.html',
  styleUrls: ['./meetingroom-current.component.css']
})
export class MeetingroomCurrentComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    });
  }

  ngOnInit() {}

}
