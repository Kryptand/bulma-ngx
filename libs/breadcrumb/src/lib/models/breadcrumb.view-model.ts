export class BreadcrumbViewModel {
  label: string;
  url: string;
  icon?: string;
  constructor(label: string, url: string, icon?: string) {
    this.label = label;
    this.url = url;
    this.icon = icon;
  }
}
