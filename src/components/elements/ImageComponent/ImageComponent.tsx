import catWebp from '@/assets/image/flbcWebp.webp';
import catPng from '@/assets/image/flbcpng.png';

import s from './ImageComponent.module.scss'

interface ImageComponentProps {
    source: string | null,
    className: string,
    description: string,
    handleImageLoad: ()=> void,
    imageStatus: boolean,
}

const ImageComponent = ({ source, className, description, handleImageLoad, imageStatus}: ImageComponentProps) => {
    return (
        <div className={s.image_container}>
            {imageStatus ? null: <div className={s.loading_hider}/>}
            {source ? <img onLoad={handleImageLoad} className={className} src={source} alt={description} /> :
                <picture>
                    {catWebp ? <source type="image/webp" srcSet={catWebp} /> : null}
                    <img onLoad={handleImageLoad} className={className} src={catPng} alt={description} />
                </picture>
            }

        </div>
    )
}

export default ImageComponent;

