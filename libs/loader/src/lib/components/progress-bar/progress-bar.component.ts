import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { LoadingBarService } from '../../services/loading-bar.service';

@Component({
  selector: 'bulma-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {
  @Input() size?: 'small' | 'medium' | 'large';
  @Input()
  color?:
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger' = 'primary';

  constructor(public loadingBarService: LoadingBarService) {}

  ngOnInit() {}
}
