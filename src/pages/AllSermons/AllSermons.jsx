import React, { useState } from "react";
import { PlayCircle, Video } from "lucide-react";
import "./AllSermons.css";
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Title from '../../components/Title/Title';
// Import the background image for Academy Hero
import bgAcademy from '../../assets/bg-1.jpg';  

const allSermons = [
  {
    id: "1",
    title: "The Power of Forgiveness",
    description: "A profound message on the liberating power of forgiveness.",
    type: "video",
    mediaType: "video/mp4",
    mediaUrl: "https://example.com/sermon1.mp4",
    thumbnail: "/thumbnails/sermon1.jpg",
  },
  {
    id: "2",
    title: "Walking in Faith",
    description: "Explore what it means to live a life guided by unwavering faith.",
    type: "audio",
    mediaType: "audio/mpeg",
    mediaUrl: "https://example.com/sermon2.mp3",
    thumbnail: "/thumbnails/sermon2.jpg",
  },
  {
    id: "3",
    title: "Understanding Divine Purpose",
    description: "Discover your purpose and align your life with God’s plan.",
    type: "video",
    mediaType: "video/mp4",
    mediaUrl: "https://example.com/sermon3.mp4",
    thumbnail: "/thumbnails/sermon3.jpg",
  },
  {
    id: "4",
    title: "The Joy of Giving",
    description: "A sermon on the principles of generosity and blessings.",
    type: "audio",
    mediaType: "audio/mpeg",
    mediaUrl: "https://example.com/sermon4.mp3",
    thumbnail: "/thumbnails/sermon4.jpg",
  },
  {
    id: "5",
    title: "Faith Over Fear",
    description: "Learn to overcome fear by trusting in God's promises.",
    type: "video",
    mediaType: "video/mp4",
    mediaUrl: "https://example.com/sermon5.mp4",
    thumbnail: "/thumbnails/sermon5.jpg",
  },
  {
    id: "6",
    title: "The Secret Place",
    description: "Intimacy with God through prayer and solitude.",
    type: "audio",
    mediaType: "audio/mpeg",
    mediaUrl: "https://example.com/sermon6.mp3",
    thumbnail: "/thumbnails/sermon6.jpg",
  },
  {
    id: "7",
    title: "Living Righteously",
    description: "A practical guide to daily righteous living.",
    type: "video",
    mediaType: "video/mp4",
    mediaUrl: "https://example.com/sermon7.mp4",
    thumbnail: "/thumbnails/sermon7.jpg",
  },
  {
    id: "8",
    title: "Worship and Warfare",
    description: "How worship becomes a weapon in spiritual battles.",
    type: "audio",
    mediaType: "audio/mpeg",
    mediaUrl: "https://example.com/sermon8.mp3",
    thumbnail: "/thumbnails/sermon8.jpg",
  },
];

export default function AllSermonsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const sermonsPerPage = 6;

  const filteredSermons = allSermons.filter((sermon) => {
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = filterType === "all" || sermon.type === filterType;

    return matchesSearch && matchesType;
  });

  const totalPages = Math.ceil(filteredSermons.length / sermonsPerPage);
  const startIndex = (currentPage - 1) * sermonsPerPage;
  const currentSermons = filteredSermons.slice(
    startIndex,
    startIndex + sermonsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
     <Navbar />
      
      <Hero
        title="Welcome to Purpose Academy"
        subtitle={
          <>
            Enrollment for Junior Academy Cohort 2 is ongoing! Secure your spot before registration closes on <strong>Wednesday, 6th August, 2025</strong>.
          </>
        }
        buttonText="Register Now"
        buttonLink="https://forms.gle/N3ZHxRFGRudVWyp38"
        backgroundImage={bgAcademy}
      />
      <Title subTitle="Sermons" title="Hear the Word, Grow in Faith" />
    <section className="all-sermons-section">
      <div className="sermon-container">
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search sermons..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <select
            value={filterType}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="all">All Types</option>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
          </select>
        </div>

        <div className="sermonsGrid">
          {currentSermons.length > 0 ? (
            currentSermons.map((sermon) => {
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
                      className="btn"
                      href={sermon.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {sermon.type === "video"
                        ? "Watch Sermon"
                        : "Listen Sermon"}
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="no-results">No sermons match your search.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`page-btn ${
                  currentPage === i + 1 ? "active" : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
    </div>
  );
}
