import catWebp from '@/assets/image/flbcWebp.webp';
import catPng from '@/assets/image/flbcpng.png';

interface ImageComponentProps {
    source: string | null,
    className: string,
    description: string,
}

const ImageComponent = ({ source, className, description }: ImageComponentProps) => {
    return (
        <div>
            {source ? <img className={className} src={source} alt={description} /> :
                <picture>
                    {catWebp ? <source type="image/webp" srcSet={catWebp} /> : null}
                    <img className={className} src={catPng} alt={description} />
                </picture>
            }

        </div>
    )
}

export default ImageComponent;

