import React from "react";
import { PlayCircle, Video } from "lucide-react";
import "./SermonsSection.css";
import { Link } from "react-router-dom"; // or use <a> if you're not using React Router

export default function SermonsSection() {
  const sermons = [
    {
      id: "1",
      title: "The Power of Forgiveness",
      description:
        "A profound message on the liberating power of forgiveness and its role in spiritual growth and healing.",
      type: "video",
      mediaType: "video/mp4",
      mediaUrl: "https://example.com/sermon1.mp4",
      thumbnail: "/thumbnails/sermon1.jpg",
    },
    {
      id: "2",
      title: "Walking in Faith",
      description:
        "Explore what it means to live a life guided by unwavering faith, even in challenging times.",
      type: "audio",
      mediaType: "audio/mpeg",
      mediaUrl: "https://example.com/sermon2.mp3",
      thumbnail: "/thumbnails/sermon2.jpg",
    },
    {
      id: "3",
      title: "Understanding Divine Purpose",
      description:
        "Discover your unique purpose and how to align your life with God's divine plan for you.",
      type: "video",
      mediaType: "video/mp4",
      mediaUrl: "https://example.com/sermon3.mp4",
      thumbnail: "/thumbnails/sermon3.jpg",
    },
    {
      id: "4",
      title: "The Joy of Giving",
      description:
        "A sermon on the spiritual principles of generosity and the blessings that come from a giving heart.",
      type: "audio",
      mediaType: "audio/mpeg",
      mediaUrl: "https://example.com/sermon4.mp3",
      thumbnail: "/thumbnails/sermon4.jpg",
    },
    {
      id: "5",
      title: "Living with Eternal Perspective",
      description:
        "An inspiring sermon that encourages you to fix your gaze on eternal truths.",
      type: "video",
      mediaType: "video/mp4",
      mediaUrl: "https://example.com/sermon5.mp4",
      thumbnail: "/thumbnails/sermon5.jpg",
    },
    // Add more sermons if needed
  ];

  const featuredSermons = sermons.slice(0, 4); // Show only first 4

  return (
    <section className="sermon-section">
      <div className="sermon-container">
        <div className="sermonsGrid">
          {featuredSermons.map((sermon) => {
            const Icon = sermon.type === "video" ? Video : PlayCircle;
            return (
              <div key={sermon.id} className="card">
                <div className="cardImageContainer">
                  <img
                    src={sermon.thumbnail}
                    alt={`${sermon.title} Thumbnail`}
                    className="cardImage"
                  />
                  <div className="iconOverlay">
                    <Icon className="icon" />
                  </div>
                </div>

                <div className="cardHeader">
                  <h3 className="cardTitle">{sermon.title}</h3>
                </div>

                <div className="cardContent">
                  <p className="cardDescription">{sermon.description}</p>
                </div>

                <div className="cardFooter">
                  <a
                    className="buttn"
                    href={sermon.mediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sermon.type === "video" ? "Watch Sermon" : "Listen Sermon"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="viewAllWrapper">
          <Link to="/sermons" className="viewAllBtn">
            View All Sermons
          </Link>
        </div>
      </div>
    </section>
  );
}
