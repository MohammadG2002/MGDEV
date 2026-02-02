import "./CarouselPagination.css";

interface CarouselPaginationProps {
  itemCount: number;
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export const CarouselPagination = ({
  itemCount,
  currentIndex,
  onIndexChange,
}: CarouselPaginationProps) => {
  return (
    <div className="carousel-pagination">
      {Array.from({ length: itemCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => onIndexChange(index)}
          className={`carousel-pagination-dot ${currentIndex === index ? "active" : ""}`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
