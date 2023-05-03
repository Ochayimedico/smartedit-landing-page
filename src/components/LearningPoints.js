import SectiionFour from "./SectionFour";

export default function LearningPoint() {
  const thingsToLearn = [
    {
      id: 1,
      content:
        "Basics of Smartphone video creation (camera settings, angles, video formats, etc).",
    },
    {
      id: 2,
      content:
        "The tools and FREE apps needed to create and edit your videos professionally (I’ll show you my 4 favourite apps compatible to iPhone and Android – and FREE too).",
    },
    {
      id: 3,
      content:
        "How to trim/cut/split and arrange different video clips together on a timeline",
    },
    {
      id: 4,
      content: "How to filter your videos for best quality/color grading.",
    },
    {
      id: 5,
      content: "How to add music, sound fx or voice over to your videos",
    },
    {
      id: 6,
      content: "How to add smooth transitions in your videos.",
    },
    {
      id: 7,
      content: "How to speed up and slow down your videos realistically,",
    },
    {
      id: 8,
      content:
        "How to add text, name cards and caption/subtitles to your video (automated captions too).",
    },
    {
      id: 9,
      content: "How to create powerful intros.",
    },
    {
      id: 10,
      content:
        "How to apply the green screen effect and overlay to your videos to make it fun and attracting",
    },
    {
      id: 11,
      content:
        "How to change the background of your video to any one you like.",
    },
    {
      id: 12,
      content: "How to reduce / shrink your video without losing the quality.",
    },
    {
      id: 13,
      content: "How to add like, subscribe and notification bell to your video",
    },
    {
      id: 14,
      content: "How to keyframe to add beauty to you video.",
    },
    {
      id: 15,
      content: "How to create Youtube intro.",
    },
  ];

  return (
    <>
      <SectiionFour thingsToLearn={thingsToLearn} />
    </>
  );
}
