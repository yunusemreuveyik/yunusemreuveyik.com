interface GoogleApiReview {
  author_name: string;
  relative_time_description: string;
  rating: number;
  profile_photo_url: string;
  text: string;
}

export interface GoogleReviewResult {
  rating: number;
  reviews: GoogleApiReview[];
}

/** Shown when the legacy API is offline — keeps the portfolio demo complete. */
const demoReviews: GoogleReviewResult = {
  rating: 4.8,
  reviews: [
    {
      author_name: "Guest",
      relative_time_description: "a year ago",
      rating: 5,
      profile_photo_url: "",
      text: "Beautiful garden, friendly staff, and a calm atmosphere close to the sea. Perfect for a relaxing stay in Kemer.",
    },
    {
      author_name: "Traveler",
      relative_time_description: "2 years ago",
      rating: 5,
      profile_photo_url: "",
      text: "Clean rooms, good breakfast, and a lovely pool area. Çamyuva is quiet compared to central Kemer — we liked that.",
    },
    {
      author_name: "Visitor",
      relative_time_description: "2 years ago",
      rating: 4,
      profile_photo_url: "",
      text: "Great value boutique hotel. Walking distance to the beach and helpful reception team.",
    },
  ],
};

export const fetchGoogleReviews = async (): Promise<GoogleReviewResult | null> => {
  try {
    const res = await fetch(
      "https://palmarosa-backend.onrender.com/api/google-reviews",
    );
    if (!res.ok) {
      return demoReviews;
    }
    const data = await res.json();

    if (data.result?.reviews && data.result?.rating) {
      return {
        rating: data.result.rating,
        reviews: data.result.reviews,
      };
    }
  } catch {
    return demoReviews;
  }

  return demoReviews;
};
