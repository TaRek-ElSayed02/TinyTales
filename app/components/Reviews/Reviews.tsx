"use client";
import React from "react";
import { useLanguage } from '../../contexts/LanguageContext';
import { t } from '../../i18n';
import { Star } from "lucide-react";

const ratings = [
  { stars: 5, percent: 67 },
  { stars: 4, percent: 15 },
  { stars: 3, percent: 6 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 9 },
];


const reviews = [
  { id: 1, name: "Alex Daewn", rating: 4, dateKey: 'reviews.sampleDate1', commentKey: 'reviews.sampleComment1' },
  { id: 2, name: "Alex Daewn", rating: 4, dateKey: 'reviews.sampleDate1', commentKey: 'reviews.sampleComment2' },
  { id: 3, name: "Alex Daewn", rating: 4, dateKey: 'reviews.sampleDate1', commentKey: 'reviews.sampleComment3' },
  { id: 4, name: "Alex Daewn", rating: 4, dateKey: 'reviews.sampleDate1', commentKey: 'reviews.sampleComment4' },
];



interface StarRatingProps {
  rating: number;
}

export default function Reviews() {
  const layer = "/layer_1.png"
  const chat = "/chat.png"
  const { locale } = useLanguage();
  const StarRating = ({ rating }: StarRatingProps) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-[#C89B94]" : "fill-[#E6E6E6]"
              }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.95 5.52L10 14.8l-4.95 2.6.95-5.52-4-3.9 5.53-.8L10 1.5z" />
          </svg>
        ))}
      </div>
    );
  };
  return (
    <div className="md:p-8 p-3 mt-5 bg-white rounded-xl">
      <h3 className="text-[16px] md:text-[24px] font-semibold mb-6">
        <span className="underline decoration-[#BE968E] underline-offset-8 decoration-4">
          {t('reviews.title', locale).slice(0,3)}
        </span>
        {t('reviews.title', locale).slice(3)}
      </h3>

      <div className="flex justify-between ">
        <div className="flex flex-col md:flex-row w-full gap-10 text-center md:text-left">
          <h2 className="flex items-end justify-center text-center md:text-left md:justify-start gap-2">
            <span className="text-[80px] md:text-[120px] font-medium text-black">4,5</span>
            <span className="text-[24px] text-gray-400 mb-2">/5</span>
          </h2>

          <div className="flex flex-col gap-4 flex-1 max-w-[650px]">
            {ratings.map((item) => (
              <div key={item.stars} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-12">
                  <Star size={18} className="fill-[#BE968E] text-[#BE968E]" />
                  <span className="text-sm font-medium">{item.stars}</span>
                </div>

                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#BE968E] rounded-full"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
                <span className="w-10 text-sm text-gray-600">
                  %{item.percent}
                </span>
              </div>
            ))}
          </div>
        </div>



          <div className="text-center hidden md:block w-[180px] flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-[#545454]">{t('reviews.totalReviews', locale)}</p>
          <h2 className="text-5xl font-bold my-3">3.0K</h2>

          <button className="flex justify-center items-center px-1 py-4 bg-[#BE968E] w-[186px] text-[16px] text-white rounded-xl hover:opacity-90 transition gap-2">
            {t('reviews.addComment', locale)}
            <span className="flex items-center">
              <img src={chat} alt="" />
            </span>
          </button>
        </div>
      </div>

      <div className="mt-9 max-w-full ">

        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <h4 className="font-semibold text-sm">{review.name}</h4>
                  <StarRating rating={review.rating} />
                </div>
                <span className="text-xs text-gray-400">
                  {t(review.dateKey as any, locale)}
                </span>
              </div>

              <p className="mt-3 text-[12px] md:text-[16px] text-gray-600 leading-relaxed">
                {t(review.commentKey as any, locale)}
              </p>
            </div>
          ))}
        </div>

          <div className="flex justify-center mt-10 relative">
          <button className="px-6 py-2 rounded bg-gray-100 text-sm text-[#BE968E] hover:bg-gray-200 transition">
            {t('reviews.viewMore', locale)}
          </button>
          <img
            src={layer}
            alt="decoration"
            className="absolute left-0 md:top-1/2 top-20 -translate-y-1/2 w-16 h-12 md:w-20 md:h-15 opacity-50"
          />
        </div>
      </div>
    </div>
  );
}