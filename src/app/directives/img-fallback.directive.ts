import { Directive , ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appImgFallback]'
})
export class ImgFallbackDirective {

  @Input() appImgFallback: string;
  constructor(private eRef:ElementRef) { }

    @HostListener('error')
    updateImage(){
      const image: HTMLImageElement = this.eRef.nativeElement;
      image.src = this.appImgFallback ||'https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg'
    }

  

}
