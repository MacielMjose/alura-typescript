export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: T): void {
    const template = this.template(model);
    console.log(template);
    this.elemento.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}
