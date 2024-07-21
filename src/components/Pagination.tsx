export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const computePaginationItems = (params: {
  currentPage: number;
  totalPages: number;
}) => {
  const { currentPage, totalPages } = params;

  const paginationItems: { text: string; page: number; isCurrent?: boolean }[] =
    [
      {
        text: "<<",
        page: 1,
      },
    ];

  if (currentPage > 1) {
    paginationItems.push({
      text: "<",
      page: currentPage - 1,
    });
  }

  for (let i = 3; i >= 1; i--) {
    if (currentPage - i >= 1) {
      paginationItems.push({
        text: String(currentPage - i),
        page: currentPage - i,
      });
    }
  }

  paginationItems.push({
    text: String(currentPage),
    page: currentPage,
    isCurrent: true,
  });

  for (let i = 1; i <= 3; i++) {
    if (currentPage + i <= totalPages) {
      paginationItems.push({
        text: String(currentPage + i),
        page: currentPage + i,
      });
    }
  }

  if (currentPage < totalPages) {
    paginationItems.push({
      text: ">",
      page: currentPage + 1,
    });
  }

  paginationItems.push({
    text: ">>",
    page: totalPages,
  });

  return paginationItems;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const paginationItems = computePaginationItems({ currentPage, totalPages });

  return (
    <div className={className}>
      {paginationItems.map((item, index) => (
        <button
          key={`pagination-item-${item.page}-${item.text}`}
          className={`m-0 cursor-pointer border-none bg-white p-0 text-xl font-medium ${item.isCurrent ? "text-black" : "text-grayed"} ${index < paginationItems.length ? "mr-2" : ""}`}
          onClick={() => onPageChange(item.page)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};
