import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageBodyComponent } from './components/message-body/message-body.component';
import { MessageHeaderComponent } from './components/message-header/message-header.component';
import { MessageContainerComponent } from './containers/message-container/message-container.component';

const MESSAGE_COMPONENTS = [
  MessageContainerComponent,
  MessageBodyComponent,
  MessageHeaderComponent
];
@NgModule({
  imports: [CommonModule],
  declarations: MESSAGE_COMPONENTS,
  exports: MESSAGE_COMPONENTS
})
export class MessageModule {}
