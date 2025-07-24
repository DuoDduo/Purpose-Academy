import SectionTitle from "../../../components/section-title"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

// Mock data for sermons (should ideally come from a database or API)
const mockSermons = [
  {
    id: "1",
    title: "The Power of Forgiveness",
    description:
      "A profound message on the liberating power of forgiveness and its role in spiritual growth and healing. Learn how releasing past hurts can open doors to new blessings and inner peace.",
    type: "video" as const,
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    speaker: "Pastor John Doe",
    date: "July 10, 2025",
    imageUrl: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "2",
    title: "Walking in Faith",
    description:
      "Explore what it means to live a life guided by unwavering faith, even in challenging times. This sermon provides practical steps to strengthen your trust in God's plan.",
    type: "audio" as const,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Replace with actual audio URL
    speaker: "Evangelist Jane Smith",
    date: "July 05, 2025",
    imageUrl: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "3",
    title: "Understanding Divine Purpose",
    description:
      "Discover your unique purpose and how to align your life with God's divine plan for you. This message will help you identify your gifts and calling.",
    type: "video" as const,
    youtubeId: "your-youtube-video-id-3",
    speaker: "Bishop David Lee",
    date: "June 28, 2025",
    imageUrl: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "4",
    title: "The Joy of Giving",
    description:
      "A sermon on the spiritual principles of generosity and the blessings that come from a giving heart. Learn how giving transforms both the giver and the receiver.",
    type: "audio" as const,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    speaker: "Pastor Sarah Chen",
    date: "June 20, 2025",
    imageUrl: "/placeholder.svg?height=225&width=400",
  },
]

export default function SermonDetailPage({ params }: { params: { id: string } }) {
  const sermon = mockSermons.find((s) => s.id === params.id)

  if (!sermon) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Sermon Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The sermon you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/sermons">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Sermons
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Button asChild variant="ghost">
              <Link href="/sermons">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Sermons
              </Link>
            </Button>
          </div>
          <SectionTitle subTitle="Sermon Details" title={sermon.title} />

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {sermon.type === "video" && sermon.youtubeId && (
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            )}
            {sermon.type === "audio" && sermon.audioUrl && (
              <div className="p-6 bg-gray-100 flex items-center justify-center">
                <audio controls className="w-full max-w-md">
                  <source src={sermon.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            <div className="p-6 md:p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{sermon.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-sm">
                <div>
                  <span className="font-semibold">Speaker:</span> {sermon.speaker}
                </div>
                <div>
                  <span className="font-semibold">Date:</span> {sermon.date}
                </div>
              </div>
            </div>
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
