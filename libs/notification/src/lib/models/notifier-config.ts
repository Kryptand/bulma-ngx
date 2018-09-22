import { NotifierOptionsModel } from './notifier-options.model';

export class NotifierConfig implements NotifierOptionsModel {
  public animations: {
    enabled: boolean;
    hide: {
      easing: string;
      offset: number | false;
      preset: string;
      speed: number;
    };
    overlap: number | false;
    shift: {
      easing: string;
      speed: number;
    };
    show: {
      easing: string;
      preset: string;
      speed: number;
    };
  };

  public behaviour: {
    autoHide: number | false;
    onClick: 'hide' | false;
    onMouseover: 'pauseAutoHide' | false;
    showDismissButton: boolean;
  };

  public position: {
    horizontal: {
      distance: number;
      position: 'left' | 'middle' | 'right';
    };
    vertical: {
      distance: number;
      gap: number;
      position: 'top' | 'bottom';
    };
  };

  public constructor(customOptions: NotifierOptionsModel = {}) {
    Object.assign(this, DEFAULT_NOTIFIER_OPTIONS);
    if (customOptions.animations !== undefined) {
      if (customOptions.animations.enabled !== undefined) {
        this.animations.enabled = customOptions.animations.enabled;
      }
      if (customOptions.animations.overlap !== undefined) {
        this.animations.overlap = customOptions.animations.overlap;
      }
      if (customOptions.animations.hide !== undefined) {
        Object.assign(this.animations.hide, customOptions.animations.hide);
      }
      if (customOptions.animations.shift !== undefined) {
        Object.assign(this.animations.shift, customOptions.animations.shift);
      }
      if (customOptions.animations.show !== undefined) {
        Object.assign(this.animations.show, customOptions.animations.show);
      }
    }
    if (customOptions.behaviour !== undefined) {
      Object.assign(this.behaviour, customOptions.behaviour);
    }
    if (customOptions.position !== undefined) {
      if (customOptions.position.horizontal !== undefined) {
        Object.assign(
          this.position.horizontal,
          customOptions.position.horizontal
        );
      }
      if (customOptions.position.vertical !== undefined) {
        Object.assign(this.position.vertical, customOptions.position.vertical);
      }
    }
  }
}

const DEFAULT_NOTIFIER_OPTIONS: NotifierOptionsModel = {
  animations: {
    enabled: true,
    hide: {
      easing: 'ease',
      offset: 50,
      preset: 'fade',
      speed: 300
    },
    overlap: 150,
    shift: {
      easing: 'ease',
      speed: 300
    },
    show: {
      easing: 'ease',
      preset: 'slide',
      speed: 300
    }
  },
  behaviour: {
    autoHide: 7000,
    showDismissButton: true
  },
  position: {
    horizontal: {
      distance: 10,
      position: 'right'
    },
    vertical: {
      distance: 12,
      position: 'bottom'
    }
  }
};
