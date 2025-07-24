import SectionTitle from "../../components/section-title"
import SermonCard from "../../components/sermon-card"
import Link from "next/link"

export default function SermonsPage() {
  const allSermons = [
    {
      id: "1",
      title: "The Power of Forgiveness",
      description:
        "A profound message on the liberating power of forgiveness and its role in spiritual growth and healing.",
      type: "video" as const,
      link: "/sermons/1",
      youtubeId: "your-youtube-video-id-1",
      imageUrl: "/placeholder.svg?height=225&width=400",
    },
    {
      id: "2",
      title: "Walking in Faith",
      description: "Explore what it means to live a life guided by unwavering faith, even in challenging times.",
      type: "audio" as const,
      link: "/sermons/2",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      imageUrl: "/placeholder.svg?height=225&width=400",
    },
    {
      id: "3",
      title: "Understanding Divine Purpose",
      description: "Discover your unique purpose and how to align your life with God's divine plan for you.",
      type: "video" as const,
      link: "/sermons/3",
      youtubeId: "your-youtube-video-id-3",
      imageUrl: "/placeholder.svg?height=225&width=400",
    },
    {
      id: "4",
      title: "The Joy of Giving",
      description:
        "A sermon on the spiritual principles of generosity and the blessings that come from a giving heart.",
      type: "audio" as const,
      link: "/sermons/4",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      imageUrl: "/placeholder.svg?height=225&width=400",
    },
    {
      id: "5",
      title: "Overcoming Adversity",
      description: "A message of hope and resilience in the face of life's challenges.",
      type: "video" as const,
      link: "/sermons/5",
      youtubeId: "your-youtube-video-id-5",
      imageUrl: "/placeholder.svg?height=225&width=400",
    },
    {
      id: "6",
      title: "The Power of Prayer",
      description: "Understanding the transformative impact of consistent and heartfelt prayer.",
      type: "audio" as const,
      link: "/sermons/6",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      imageUrl: "/placeholder.svg?height=225&width=400",
    },
  ]

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            subTitle="All Sermons"
            title="Dive Deeper into the Word"
            description="Explore our complete archive of audio and video sermons. Filter by topic, speaker, or date to find the message you need."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allSermons.map((sermon) => (
              <SermonCard key={sermon.id} {...sermon} />
            ))}
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Heaven On Earth. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}
