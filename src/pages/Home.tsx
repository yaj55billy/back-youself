import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import CourseCard from '../components/CourseCard';
import { Course } from '../types';

// 模擬數據，之後會從 API 獲取
const featuredCourses: Course[] = [
  {
    id: '1',
    title: '靜坐導引體驗',
    imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80',
    datetime: '2024-03-09T14:00:00',
    maxParticipants: 15,
    category: 'meditation',
    description: '即使先前沒有接觸過靜坐，也相當適合來報名體驗，在繁忙急躁的習慣中抽離，學習讓自己好好放鬆。',
    details: '會先前置說明一些靜坐知識，以及注意事項，像是靜坐的姿勢、入門方法、容易發生的現象等。',
    originalPrice: 1199,
    specialPrice: 999,
    notes: '盡可能穿著寬鬆舒適的衣服，建議可攜帶一條毯子或大毛巾。'
  },
  {
    id: '2',
    title: '瑜珈入門',
    imageUrl: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80',
    datetime: '2024-02-21T19:00:00',
    maxParticipants: 15,
    category: 'yoga',
    description: '適合初學者，即使先前沒有接觸過瑜珈。課程會以簡單伸展與呼吸調整為主。',
    details: '本課程適合一般大眾，在課程引導中，學員可以更加了解身體控制以避免運動傷害。',
    originalPrice: 1000,
    specialPrice: 800,
    notes: '記得攜帶水壺與毛巾，建議自備瑜珈墊。'
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              返家之路，找回內在平靜
            </h1>
            <p className="text-xl text-white/90 mb-8">
              在這裡，我們提供多元的課程與活動，幫助你重新連結身心，找回生命中最珍貴的寧靜。
            </p>
            <a
              href="#courses"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              探索課程
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            探索課程類別
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard
              title="靜坐導引"
              description="透過專業引導，學習放鬆與專注"
              href="/courses?category=meditation"
              category="meditation"
            />
            <CategoryCard
              title="瑜珈課程"
              description="連結身心，找回身體的自然韻律"
              href="/courses?category=yoga"
              category="yoga"
            />
            <CategoryCard
              title="食療養生"
              description="了解食物與身心的關係"
              href="/courses?category=diet"
              category="diet"
            />
            <CategoryCard
              title="頌缽療癒"
              description="讓音療帶來深層的放鬆"
              href="/courses?category=singing-bowl"
              category="singing-bowl"
            />
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">精選課程</h2>
            <Link
              to="/courses"
              className="text-primary hover:text-primary-dark font-semibold"
            >
              查看全部
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            準備好開始你的心靈之旅了嗎？
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            加入我們，一起探索內在的寧靜。無論你是初學者還是有經驗的修行者，
            這裡都有適合你的課程。
          </p>
          <Link
            to="/courses"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            立即報名
          </Link>
        </div>
      </section>
    </div>
  );
}