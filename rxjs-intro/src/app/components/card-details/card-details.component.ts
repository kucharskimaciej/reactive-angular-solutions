import {Component, OnInit} from '@angular/core';
import {Card} from "../../models/card";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {List} from "../../models/list";
import {DataService} from "../../data.service";

@Component({
  moduleId: module.id,
  selector: 'card-details',
  templateUrl: 'card-details.component.html',
  styleUrls: ['./card-details.component.css']
})

export class CardDetailsComponent implements OnInit {
  card: Card;
  currentList: List;
  lists: List[];

  constructor(private location: Location,
              private route: ActivatedRoute,
              private data: DataService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const cardId = params['id'];
      this.card = this.data.getCard(cardId);
      this.setupLists();
    });
  }

  private setupLists() {
    this.currentList = this.data.getList(this.card.list_id);
    this.lists = this.data.lists.filter(list => list.id !== this.card.list_id);
  }

  close() {
    this.location.back();
  }

  onRemove() {
    this.data.removeCard(this.card.id);
    this.close();
  }

  onTitleChange(title: string) {
    this.data.updateCard(this.card.id, {title});
  }

  moveCard(list_id: string) {
    this.data.updateCard(this.card.id, {list_id});
    this.setupLists();
  }
}
