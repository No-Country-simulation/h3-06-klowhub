import Button from '@/components/ui/buttons/BaseButton/BaseButton';
import TextLink from '@/components/ui/links/textLink/TextLink';
import Image from 'next/image';
import { FC } from 'react';
import { LuMoreVertical } from 'react-icons/lu';

export type TProductCard = {
  image: string;
  title: string;
  description: string;
  type: 'course' | 'application';
  duration: string;
  platform: 'AppSheet' | 'PowerApps';
  labels: string[];
  reviews: number;
  reviewsCount: number;
  price: number;
  width?: string;
  height?: string;
};
const ProductCard: FC<TProductCard> = ({
  image,
  title,
  description,
  type,
  duration,
  platform,
  labels,
  reviews,
  reviewsCount,
  price,
  width = '428px',
  height = '666px',
}) => {
  return (
    <div className="flex flex-col justify-center" style={{ width, height }}>
      <Image alt="KlowHub" className="h-full w-full" src={image} />
      <div>
        <p>{title}</p>
        <LuMoreVertical />
      </div>

      <p>{description}</p>
      {type === 'course' && <span>{duration}</span>}
      <span>{platform}</span>
      <div>
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      <div>
        <span>{reviews}</span>
        <span>{reviewsCount}</span>
      </div>
      <TextLink href="#" variant="primary">
        Ver mas
      </TextLink>
      <div>
        <span>{price}</span>
        <Button>Anadir al carrito</Button>
      </div>
    </div>
  );
};

export default ProductCard;
