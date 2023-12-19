export default function Skip({ setIsAnimating }) {
  return (
    <div
      onClick={() => setIsAnimating(false)}
      className="text-textSub2 text-xl font-catamaran absolute top-8 right-16 italic z-[100] cursor-pointer hover:text-textMain"
    >
      Skip Animation
    </div>
  );
}
