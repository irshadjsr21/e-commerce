"use client";

import { api } from "~/trpc/react";
import { Card, Checkbox, Pagination } from "../../components";
import { useEffect, useState } from "react";
import { Spinner } from "~/components/Spinner";

export function Category() {
  const [page, setPage] = useState(1);

  const query = api.category.list.useQuery({ page, limit: 6 });
  const mutation = api.category.like.useMutation();

  const onLike = (categoryId: string, isSelected: boolean) => {
    mutation.mutate({ categoryId, liked: isSelected });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      query.refetch().catch(console.error);
    }
  }, [mutation.isSuccess]);

  return (
    <main className="mt-10 flex justify-center">
      <Card title="Please mark your interests!">
        <p className="mb-8 text-center">We will keep you notified.</p>
        <p className="mb-8 text-xl font-medium">My saved interests!</p>
        {query.isPending && <Spinner />}
        {query.data?.categories.map((item, index) => (
          <Checkbox
            id={item.id}
            key={item.id}
            name={item.name}
            checked={item.isLiked}
            disabled={mutation.isPending}
            onChange={(val) => onLike(item.id, val)}
            className={
              index !== query.data.categories.length - 1 ? `mb-6` : undefined
            }
          />
        ))}
        {query.data && (
          <Pagination
            totalPages={query.data.totalPages}
            currentPage={page}
            onPageChange={setPage}
            className="mt-[60px]"
          />
        )}
      </Card>
    </main>
  );
}
