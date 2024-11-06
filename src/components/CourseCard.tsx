import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
          {course.category === 'meditation' && '靜坐'}
          {course.category === 'yoga' && '瑜珈'}
          {course.category === 'diet' && '飲食'}
          {course.category === 'singing-bowl' && '頌缽'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {format(new Date(course.datetime), 'yyyy/MM/dd HH:mm', { locale: zhTW })}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 line-through text-sm">
              ${course.originalPrice}
            </span>
            <span className="text-primary font-semibold">
              ${course.specialPrice}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}