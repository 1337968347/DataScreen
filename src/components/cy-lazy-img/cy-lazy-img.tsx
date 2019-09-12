import { Component, Element, Prop, Watch,h } from '@stencil/core';


@Component({
  tag: 'cy-lazy-img',
  styleUrl: 'cy-lazy-img.scss',
  shadow: true
})
export class CyLazyImg {
  @Element() el: HTMLElement;
  @Prop() src: string = "";
  @Prop() alt: string = "";
  @Prop() defaultImg: string = "";
  // 是否开启懒加载
  @Prop() isLazy: boolean = true;
  io: IntersectionObserver;

  componentDidLoad() {
    // 如果开启懒加载
    if (this.isLazy) {
      this.addIntersectionObserver();
    } else {
      this.handleImage();
    }
  }

  @Watch("src")
  handleSrcChange(newValue: string, oldValue: string) {
    const image: HTMLImageElement = this.el.shadowRoot.querySelector('img');
    if (newValue !== oldValue) {
      if (this.isLazy) {
        this.addIntersectionObserver();
      } else {
        image.setAttribute('src', this.src);
      }
    }

  }

  handleImage() {
    console.log(this.src)
    const image: HTMLImageElement = this.el.shadowRoot.querySelector('img');
    image.setAttribute('src', this.src);
    image.onerror = () => {
      this.handleImageError();
    }
  }

  // 图片不存在时处理
  handleImageError() {
    const image: HTMLImageElement = this.el.shadowRoot.querySelector('img');
    image.onerror = null;
    image.setAttribute('src', this.defaultImg);
  }

  addIntersectionObserver() {
    if (!this.src) {
      // 先把默认图片放上
      if (this.defaultImg) {
        const image: HTMLImageElement = this.el.shadowRoot.querySelector('img');
        image.setAttribute('src', this.defaultImg);
      }
      return
    }
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
        if (data[0].isIntersecting) {
          this.handleImage();
          this.removeIntersectionObserver();
        }
      })
      this.io.observe(this.el.shadowRoot.querySelector('img'));
    } else {
      setTimeout(() => {
        this.handleImage();
      }, 300);
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return (
      <img alt={this.alt}></img>
    );
  }
}