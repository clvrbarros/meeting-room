import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  id: number;
  room: Room;

  

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private roomService: RoomService) { }

  ngOnInit() {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoom(this.id)
      .subscribe(data => {
        console.log(data)
        this.room = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['rooms']);
  }

}
