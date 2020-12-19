import {MidiHelper} from './midiHelper';
import {StorageHelper} from './storageHelper';

export class Arc {
  private mh_: MidiHelper;
  private sh_ = StorageHelper;

  private selector_: string;
  private element_: HTMLInputElement | null = null;
  private label_: HTMLElement | null = null;
  private value_ = 0;

  constructor(selector: string, mh: MidiHelper) {
    this.selector_ = selector;
    this.mh_ = mh;

    if (this.selector_) {
      this.element_ = document.querySelector(this.selector_);
      this.label_ = document.querySelector(`${this.selector_}-label`);
      this.sh_.getState(this.element_, 'value');
    }

    this.attach_();
  }

  get value(): number {
    return new Number(this.value_) as number;
  }

  private attach_() {
    if (this.element_) {
      this.element_.addEventListener('input', this.changeListener_.bind(this));
      this.element_.addEventListener('click', this.changeListener_.bind(this));
    }
  }

  private changeListener_() {
    const elem = document.querySelector(`${this.selector_}-val1`) as HTMLInputElement;
    const val1 = new Number(elem.value || 0) as number;

    if (this.element_) {
      this.value_ = new Number(this.element_.value) as number;
      if (this.label_ && val1) {
        this.label_.innerText = `${this.value_} | ${val1}`;
      }

      // this.mh_.noteOn(this.value, 100, 100);
      this.mh_.sendMessage(this.mh_.CC, val1, this.value);
      this.sh_.setState(this.element_, 'value');
    }
  }
}