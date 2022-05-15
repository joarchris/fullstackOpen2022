const Header = ({ course }) => <h1>{course.name}</h1>;

const Content = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      {parts.map((part) => {
        return (
          <p key={part.name}>
            {part.name} {part.exercises}
          </p>
        );
      })}
      <p>
        <strong>Total of {total} exercises</strong>
      </p>
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            <Content parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
