import * as Separator from "@radix-ui/react-separator";
import type React from "react";
import { FaHeart } from "react-icons/fa";
import TagList from "../tags";
import Rating from "./Rating";
import * as styles from "./card.css";
import Carousel from "./carousel";
import type { Media } from "../../types/Media";

type CardProps = {
  title: string;
  date: string;
  description: string;
  review: number;
  likes: number;
  tags: string[];
  originalTitle: string;
  originalLanguage: string;
  imageUrl: string;
  backDropPath?: string;
  isAdult: boolean;
  media: Media;
};

const Card: React.FC<CardProps> = ({
  title,
  date,
  description,
  review,
  likes,
  tags,
  originalTitle,
  originalLanguage,
  imageUrl,
  backDropPath,
  isAdult,
  media,
}) => {
  const categorizeTags = (
    media: Media,
    isAdult: boolean,
    originalLanguage: string
  ) => {
    const tags = [];
    if (media === "movie") {
      tags.push("Movie");
    }

    if (media === "tv") {
      tags.push("TV Show");
    }

    if (isAdult) {
      tags.push("Adult");
    }

    tags.push(originalLanguage);
    return tags;
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.date}>{date}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.reviewSection}>
            <div className={styles.stars}>
              <Rating value={review} readOnly />
            </div>
            <div className={styles.favorite}>
              <FaHeart />
              <span>{likes}</span>
            </div>
          </div>
          <Separator.Root
            className={styles.separator}
            decorative
            orientation="horizontal"
          />
          <p>{originalTitle}</p>
          <TagList
            type="category"
            tags={categorizeTags(media, isAdult, originalLanguage)}
          />
          <TagList type="genre" tags={tags} />
        </div>
      </div>

      {/* 右側の画像 */}
      <div className={styles.imageContainer}>
        <Carousel
          slides={[
            <img
              key={imageUrl}
              src={
                imageUrl
                  ? `https://image.tmdb.org/t/p/w500${imageUrl}`
                  : "https://via.placeholder.com/500"
              }
              alt={imageUrl}
              className={styles.image}
            />,
            <img
              key={backDropPath}
              src={
                backDropPath
                  ? `https://image.tmdb.org/t/p/w500${backDropPath}`
                  : "https://via.placeholder.com/500"
              }
              alt={imageUrl}
              className={`${styles.image} ${styles.backDropImage}`}
            />,
          ]}
        />
        ,
      </div>
    </div>
  );
};

export default Card;
