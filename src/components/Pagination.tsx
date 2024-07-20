export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const paginationItems = [
    {
      text: "<<",
      page: 1,
    },
    {
      text: "<",
      page: currentPage - 1,
    },
    {
      text: "1",
      page: 1,
    },
    {
      text: "2",
      page: 2,
    },
    {
      text: "3",
      page: 3,
    },
    {
      text: "4",
      page: 4,
      isCurrent: true,
    },
    {
      text: "5",
      page: 5,
    },
    {
      text: "6",
      page: 6,
    },
    {
      text: "7",
      page: 7,
    },
    {
      text: ">",
      page: currentPage + 1,
    },
    {
      text: ">>",
      page: totalPages,
    },
  ];

  return (
    <div className={className}>
      {paginationItems.map((item, index) => (
        <button
          key={item.page}
          className={`m-0 border-none bg-white p-0 text-xl font-medium cursor-pointer ${item.isCurrent ? "text-black" : "text-grayed"} ${index < paginationItems.length ? "mr-2" : ""}`}
          onClick={() => onPageChange(item.page)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};
