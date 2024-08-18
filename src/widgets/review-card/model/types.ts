export interface Review {
  id: string;
  date: Date;
  rating: string;
  text: string;
  authorImage: string;
  authorName: string;
}

export interface ReviewResponce {
  reviews: Review[];
}

export interface ReviewCardProps {
  review: Review;
}
