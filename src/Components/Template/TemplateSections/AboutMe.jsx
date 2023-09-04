export default function AboutMe({
  className,
  id,
  draggable,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
}) {
  return (
    <div
      // className={`${className}`}
      // id={id}
      // draggable={draggable}
      // onDragStart={(e) => onDragStart(e)}
      // onDragEnd={(e) => onDragEnd(e)}
      // onDragOver={(e) => onDragOver(e)}
      // onDrop={(e) => onDrop(e)}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam optio
      voluptas eum mollitia esse vero facilis ipsa iusto fugit vitae itaque,
      consequatur quam architecto modi odit praesentium ea aspernatur odio?
      Dicta quos ut debitis sapiente saepe necessitatibus velit ad, rerum sit
      quis neque ipsum deserunt perferendis quod ducimus amet architecto harum
      et recusandae.
    </div>
  );
}
