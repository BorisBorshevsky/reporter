import {Component, OnChanges, Input, Output, EventEmitter} from "angular2/core";


@Component({
    selector: "ai-star",
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {


    @Input() rating;
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string>= new EventEmitter<string>();

    ngOnChanges(changes:{}):any {
        this.starWidth = this.rating * 90 / 5;
    }

    onClick():void{
        this.ratingClicked.emit('clicked')
    }

}
