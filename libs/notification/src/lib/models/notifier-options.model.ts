export interface NotifierOptionsModel {
  animations?: {
    enabled?: boolean;
    hide?: {
      easing?: string;
      offset?: number | false;
      preset?: string;
      speed?: number;
    };
    overlap?: number | false;
    shift?: {
      easing?: string;
      speed?: number;
    };
    show?: {
      easing?: string;
      preset?: string;
      speed?: number;
    };
  };
  behaviour?: {
    autoHide?: number | false;
    onClick?: 'hide' | false;
    onMouseover?: 'pauseAutoHide' | 'resetAutoHide' | false;
    showDismissButton?: boolean;
  };
  position?: {
    horizontal?: {
      distance?: number;
      position?: 'left' | 'middle' | 'right';
    };
    vertical?: {
      distance?: number;
      gap?: number;
      position?: 'top' | 'bottom';
    };
  };
  dimensions?: {
    width?: number;
  };
}
