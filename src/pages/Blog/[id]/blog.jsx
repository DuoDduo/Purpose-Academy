import SectionTitle from "../../../components/section-title"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

// Mock data for blog posts (should ideally come from a database or API)
const mockBlogPosts = [
  {
    id: "1",
    title: "5 Ways to Deepen Your Prayer Life",
    excerpt:
      "Prayer is a powerful tool for spiritual connection. Here are five practical ways to enhance your prayer journey and draw closer to God.",
    imageUrl: "/placeholder.svg?height=225&width=400",
    date: "July 10, 2025",
    author: "Rev. Michael Johnson",
    content: `
      <p>Prayer is a cornerstone of faith, a direct line to the divine. Yet, for many, it can feel like a chore or a mystery. Deepening your prayer life isn't about rigid rules, but about cultivating a more intimate and consistent conversation with God.</p>
      <h3>1. Set Aside Dedicated Time</h3>
      <p>In our busy lives, it's easy for prayer to become an afterthought. Designate a specific time each day, even if it's just 10-15 minutes, for uninterrupted prayer. This could be first thing in the morning, during your lunch break, or before bed. Consistency builds habit.</p>
      <h3>2. Find Your Sacred Space</h3>
      <p>Create an environment conducive to prayer. This doesn't have to be elaborate; it could be a quiet corner in your home, a favorite chair, or even a peaceful spot outdoors. A dedicated space helps train your mind to enter a state of reverence and focus.</p>
      <h3>3. Incorporate Different Forms of Prayer</h3>
      <p>Prayer isn't just asking for things. Explore various forms: adoration (praising God), confession (acknowledging shortcomings), thanksgiving (expressing gratitude), and intercession (praying for others). Reading Psalms can also inspire your prayers.</p>
      <h3>4. Journal Your Prayers and Reflections</h3>
      <p>Writing down your prayers can help you stay focused and track your spiritual journey. It allows you to reflect on how God has answered prayers and how you've grown over time. It's a tangible record of your conversation with the divine.</p>
      <h3>5. Practice Listening</h3>
      <p>Prayer is a two-way conversation. After you've spoken, take time to be silent and listen. God often speaks in a "still small voice" through thoughts, feelings, or insights. This requires patience and an open heart.</p>
      <p>By intentionally incorporating these practices, you can transform your prayer life from a routine into a vibrant, life-giving relationship with God.</p>
    `,
  },
  {
    id: "2",
    title: "Finding Peace in a Chaotic World",
    excerpt:
      "In an ever-changing world, discover how to cultivate inner peace and tranquility through spiritual practices.",
    imageUrl: "/placeholder.svg?height=225&width=400",
    date: "July 05, 2025",
    author: "Dr. Emily White",
    content: `
      <p>The modern world often feels like a whirlwind of demands, news, and anxieties. Finding inner peace amidst this chaos isn't a luxury; it's a necessity for spiritual and mental well-being. Here's how faith can guide you to tranquility.</p>
      <h3>Embrace the Present Moment</h3>
      <p>Much of our anxiety stems from dwelling on the past or worrying about the future. The Bible encourages us to "not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own" (Matthew 6:34). Practice mindfulness and focus on the blessings of the current moment.</p>
      <h3>Cultivate Gratitude</h3>
      <p>A grateful heart is a peaceful heart. Regularly list things you are thankful for, no matter how small. This shifts your perspective from what's lacking to what's abundant, fostering contentment.</p>
      <h3>Trust in Divine Providence</h3>
      <p>Surrender control to a higher power. Believing that God has a plan and is in control, even when circumstances seem overwhelming, can alleviate immense pressure. "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future" (Jeremiah 29:11).</p>
      <h3>Limit Exposure to Negativity</h3>
      <p>Be mindful of what you consume – news, social media, conversations. While staying informed is important, constant exposure to negativity can erode your peace. Choose to fill your mind with uplifting and faith-affirming content.</p>
      <h3>Connect with Community</h3>
      <p>Isolation can amplify feelings of anxiety. Seek out and engage with your faith community. Sharing burdens, praying together, and supporting one another can provide immense comfort and a sense of belonging.</p>
      <p>True peace is not the absence of trouble, but the presence of God amidst trouble. By leaning into your faith, you can find a calm anchor in life's storms.</p>
    `,
  },
  {
    id: "3",
    title: "The Importance of Community in Faith",
    excerpt:
      "Learn why being part of a faith community is crucial for support, growth, and shared spiritual experiences.",
    imageUrl: "/placeholder.svg?height=225&width=400",
    date: "June 28, 2025",
    author: "Pastor David Lee",
    content: `
      <p>Faith is often a personal journey, but it's rarely meant to be a solitary one. The Bible consistently emphasizes the importance of community, referring to believers as a "body" with many parts. Here's why being connected to a faith community is vital for your spiritual health.</p>
      <h3>Mutual Support and Encouragement</h3>
      <p>Life throws challenges our way. In a faith community, you find brothers and sisters who can uplift you, pray for you, and offer practical help during difficult times. "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up" (Ecclesiastes 4:9-10).</p>
      <h3>Shared Growth and Learning</h3>
      <p>Being part of a community provides opportunities for collective learning and spiritual growth. Through sermons, Bible studies, and discussions, you gain new perspectives and deepen your understanding of God's Word. Iron sharpens iron, and so one person sharpens another.</p>
      <h3>Accountability and Correction</h3>
      <p>A healthy community offers gentle accountability, helping you stay on track with your spiritual commitments and offering loving correction when you stray. This isn't about judgment, but about helping each other live more fully into God's calling.</p>
      <h3>Opportunities for Service</h3>
      <p>God has gifted each of us with unique talents. A faith community provides a platform to discover and use these gifts to serve others, both within the church and in the wider world. Serving together strengthens bonds and fulfills purpose.</p>
      <h3>A Sense of Belonging</h3>
      <p>In an increasingly disconnected world, a faith community offers a profound sense of belonging and acceptance. It's a place where you are known, loved, and valued for who you are in Christ.</p>
      <p>Don't underestimate the power of gathering together. It's where faith is strengthened, burdens are shared, and the love of God is made manifest through human connection.</p>
    `,
  },
  {
    id: "4",
    title: "Understanding Spiritual Gifts",
    excerpt:
      "Explore the various spiritual gifts and how they can be used to build up the body of Christ and serve others effectively.",
    imageUrl: "/placeholder.svg?height=225&width=400",
    date: "June 20, 2025",
    author: "Pastor Sarah Chen",
    content: `
      <p>Every believer is uniquely gifted by the Holy Spirit for the purpose of building up the church and serving God's kingdom. Understanding your spiritual gifts is a crucial step in living out your divine purpose.</p>
      <h3>What Are Spiritual Gifts?</h3>
      <p>Spiritual gifts are supernatural abilities given by the Holy Spirit to believers for the common good. They are distinct from natural talents, though God can certainly use our natural abilities. The Bible lists various gifts in passages like Romans 12, 1 Corinthians 12, and Ephesians 4.</p>
      <h3>Common Spiritual Gifts</h3>
      <ul>
        <li><strong>Prophecy:</strong> Speaking God's truth for edification, exhortation, and comfort.</li>
        <li><strong>Service/Helps:</strong> Practical assistance to others in the body of Christ.</li>
        <li><strong>Teaching:</strong> Explaining and applying God's Word clearly.</li>
        <li><strong>Exhortation/Encouragement:</strong> Motivating and comforting others.</li>
        <li><strong>Giving:</strong> Generously contributing resources to God's work.</li>
        <li><strong>Leadership/Administration:</strong> Guiding and organizing God's people.</li>
        <li><strong>Mercy:</strong> Showing compassion and practical care to those in need.</li>
        <li><strong>Discernment:</strong> Distinguishing between truth and error, good and evil.</li>
        <li><strong>Faith:</strong> An extraordinary confidence in God's power and promises.</li>
        <li><strong>Healing:</strong> Being an instrument of God's healing power.</li>
        <li><strong>Miracles:</strong> Performing supernatural acts that demonstrate God's power.</li>
        <li><strong>Tongues and Interpretation:</strong> Speaking in unknown languages and interpreting them.</li>
      </ul>
      <h3>Discovering Your Gifts</h3>
      <p>How do you find out what your spiritual gifts are? It's a combination of prayer, self-reflection, and community feedback:</p>
      <ol>
        <li><strong>Pray:</strong> Ask God to reveal your gifts to you.</li>
        <li><strong>Explore:</strong> Read about the gifts in the Bible and consider which ones resonate with you.</li>
        <li><strong>Experiment:</strong> Try serving in different areas of ministry. You'll often find your gifts emerge as you serve.</li>
        <li><strong>Seek Confirmation:</strong> Ask trusted spiritual mentors or friends what gifts they see in you.</li>
      </ol>
      <h3>Using Your Gifts</h3>
      <p>Once you identify your gifts, the key is to use them! Spiritual gifts are not for personal gain but for the building up of the church and the glory of God. When every member uses their gifts, the body of Christ functions effectively and beautifully.</p>
    `,
  },
  {
    id: "5",
    title: "Living a Purpose-Driven Life",
    excerpt: "Discover how to identify and pursue your God-given purpose, leading to a life of fulfillment and impact.",
    imageUrl: "/placeholder.svg?height=225&width=400",
    date: "June 15, 2025",
    author: "Bishop Thomas Green",
    content: `
      <p>Many people wander through life feeling unfulfilled, searching for meaning. As believers, we are assured that our lives have a divine purpose, intricately woven into God's grand design. Discovering and living out this purpose brings profound satisfaction and impact.</p>
      <h3>Understanding God's Universal Purpose for Humanity</h3>
      <p>Before we delve into individual purpose, it's essential to grasp God's overarching purpose for all humanity:</p>
      <ul>
        <li><strong>To Glorify God:</strong> Our primary purpose is to bring glory to God in all we do (1 Corinthians 10:31).</li>
        <li><strong>To Love God and Others:</strong> The greatest commandments are to love God with all our heart, soul, mind, and strength, and to love our neighbor as ourselves (Matthew 22:37-39).</li>
        <li><strong>To Make Disciples:</strong> The Great Commission calls us to share the Gospel and make disciples of all nations (Matthew 28:19-20).</li>
      </ul>
      <h3>Discovering Your Unique Purpose</h3>
      <p>Within this universal framework, God has a specific, unique purpose for each individual. This often involves a combination of your passions, talents, experiences, and spiritual gifts.</p>
      <ol>
        <li><strong>Prayer and Reflection:</strong> Spend time in prayer, asking God to reveal His purpose for your life. Reflect on your strengths, what burdens your heart, and what you are naturally drawn to.</li>
        <li><strong>Study God's Word:</strong> The Bible is a guide for life. As you read and meditate on Scripture, God will illuminate principles and callings relevant to your journey.</li>
        <li><strong>Seek Wise Counsel:</strong> Talk to trusted spiritual mentors, pastors, or friends who know you well. They can often see things in you that you might miss.</li>
        <li><strong>Serve and Experiment:</strong> Often, purpose is discovered in action. Get involved in your church or community. Try different ministries or volunteer roles. As you serve, you'll find what truly ignites your spirit and where you are most effective.</li>
        <li><strong>Embrace Your Story:</strong> Your past experiences, both good and bad, have shaped you. God can redeem and use every part of your story for His glory and your purpose.</li>
      </ol>
      <h3>Living Out Your Purpose</h3>
      <p>Living a purpose-driven life isn't about achieving one grand goal, but about consistently aligning your daily choices with God's will. It's a journey of faithfulness, growth, and impact, knowing that every step you take is part of a divine plan.</p>
    `,
  },
]

export default function BlogPostDetailPage({ params }: { params: { id: string } }) {
  const post = mockBlogPosts.find((p) => p.id === params.id)

  if (!post) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The blog post you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
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
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>
          <SectionTitle subTitle="Blog Post" title={post.title} />

          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 md:p-8">
            {post.imageUrl && (
              <div className="mb-6">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            )}
            <div className="text-sm text-gray-500 mb-4">
              By {post.author} on {post.date}
            </div>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
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
