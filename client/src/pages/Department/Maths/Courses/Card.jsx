import SpecificCard from "../../../../components/common/SpecificCard";
import { Link, useParams } from "react-router-dom";
import examsImg from "../../../../assets/exam.jpg";
import noteImg from "../../../../assets/notes.jpeg";
import quizImg from "../../../../assets/quiz.jpeg";

export default function Card() {
  const { year } = useParams(); 
  return (
    <div className="flex flex-wrap gap-x-32 p-6 gap-12">
      <Link to={`//${year}/exams`}>
        <SpecificCard
          title="Exams"
          imageSrc={examsImg}
          altText={`Year ${year} exams`}
          description="Prepare for your exams with our comprehensive resources."
        />
      </Link>
      <Link to={`/cs/${year}/notes`}>
        <SpecificCard
          title="Notes"
          imageSrc={noteImg}
          altText={`Year ${year} notes`}
          description="Access detailed notes for your studies."
        />
      </Link>
      <Link to={`/cs/${year}/quiz`}>
        <SpecificCard
          title="Quiz"
          imageSrc={quizImg}
          altText={`Year ${year} quiz`}
          description="Test your knowledge with our quizzes."
        />
      </Link>
    </div>
  );
}
