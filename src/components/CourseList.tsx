import { Course } from "../types";
import CourseCard from "./CourseCard";

interface CourseListProps {
	courses: Course[];
}

export default function CourseList({ courses }: CourseListProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</div>
	);
}
