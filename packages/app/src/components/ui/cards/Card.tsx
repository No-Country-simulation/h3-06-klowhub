"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  id: number
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: string;
  tag: string;
  rating: number; // Valoración de 1 a 5
  reviews: number; // Número de opiniones
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  imageUrl,
  duration,
  level,
  tag,
  rating,
  reviews,
}) => {
  // Convertir la valoración numérica en estrellas
  const renderStars = (rating: number) => {
    const fullStars = rating % 1 > 0.50 ? Math.ceil(rating) : Math.floor(rating); // Redondeo personalizado
    const emptyStars = 5 - fullStars; // Calcula las estrellas vacías
    return (
      <>
        {'★ '.repeat(fullStars)}
        {'☆ '.repeat(emptyStars)}
      </>
    );
  };
  


  return (
    <div className="w-full  bg-white rounded shadow-lg overflow-hidden max-w-[20rem]">
      {/* Imagen */}
      <Image
        width={400}
        height={200}
        src={imageUrl}
        className="w-full"
        alt={title}
      />
      {/* Contenido */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        {/* Detalles */}
        <div className="mt-4">
          <p className="text-sm text-black font-semibold">
            <span>Duración:</span> {duration}
          </p>
          <p className="text-sm text-black font-semibold">
            <span>Nivel:</span> {level}
          </p>
        </div>
        {/* Etiqueta */}
        <div className="mt-4 inline-flex items-center bg-gray-100 text-black text-xs px-3 py-1 rounded-full">
          <Image
            src={"/images/powerapps.png"}
            width={20}
            height={20}
            alt="Picture of the author"
            className='mr-2'
          />
          <span>{tag}</span>
        </div>
        {/* Valoración */}
        <div className="mt-4 flex items-center text-sm text-gray-600">
          <span className='mr-2'>{rating}</span>
          <span className="mr-2 text-black">{renderStars(rating)}</span>
          <span className='text-xs'>({reviews} opiniones)</span>
        </div>
        {/* Botón */}

        <div className='mt-4'>
          <Link
            href={`/courses/${id}`}
            className="text-center block text-gray-600 text-sm px-4 py-2 rounded"
          >
            Ver mas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
