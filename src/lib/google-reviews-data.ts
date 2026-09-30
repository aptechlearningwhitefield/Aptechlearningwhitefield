export interface GoogleReviewData {
  reviewId: string;
  reviewer: { displayName: string; profilePhotoUrl?: string };
  starRating: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  comment?: string;
  createTime: string;
  updateTime: string;
}

export const googleReviews: GoogleReviewData[] = [
  {
    reviewId: "AbFvOqmsc46TKzkIGL8HVtEoNhUlypGW2IocMSAoZBJ00dnDnpLJo26YVDkuLmDeJtmGQzU8asco",
    reviewer: { displayName: "Nisha" },
    starRating: "FIVE",
    comment: "",
    createTime: "2026-07-19T07:11:40.071339Z",
    updateTime: "2026-07-19T07:11:40.071339Z",
  },
  {
    reviewId: "AbFvOqlOGvt8v-6GG8QKVbb1fJ7Em62ECcZO_f9yiH4P46QhmEJ8-xOq3kyl73S0Fy3FQHcsypEgpg",
    reviewer: { displayName: "Pavithra M" },
    starRating: "FIVE",
    comment: "Aptech Learning Institute is a well-known training center that offers courses in areas like IT, software development, animation, and hardware networking. The institute has built a strong reputation over the years for providing structured learning programs aimed at improving employability.\nOne of the key strengths of Aptech is its industry-oriented curriculum. The courses are designed to match current market requirements, which is helpful for students looking to build practical skills. Trainers are generally knowledgeable and supportive, and many centers focus on hands-on learning rather than just theory.\nThe institute also provides placement assistance, which is beneficial for freshers entering the job market. However, placement outcomes can vary depending on the branch and the student's performance, so it's important not to rely solely on the institute for job opportunities.\nOn the downside, course fees can be relatively high compared to some local training centers. Additionally, the quality of training and infrastructure may differ from one branch to another, so it's advisable to check reviews of the specific center before enrolling.\nOverall, Aptech Learning Institute is a decent choice for students who are serious about upgrading their technical skills, especially if they actively engage in learning and practice beyond classroom sessions.",
    createTime: "2026-04-11T06:56:48.712099Z",
    updateTime: "2026-04-11T06:56:48.712099Z",
  },
];
