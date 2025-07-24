
import InputSearch from "@/ui/components/inputSearch";
import { Loading } from "@/ui/components/loading";
import UsersList from "@/ui/components/usersList";
import { Suspense } from "react";

interface PageProps {
  searchParams? : Promise<{ query?: string;} >
}

export default async function Home(props: PageProps) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div className="w-full">
      <div className="flex w-full justify-center pb-4">
        <h1 className="text-2xl text-blue-700 font-bold">User search utility</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <InputSearch />
      </div>
      <Suspense key={query} fallback={<Loading />}>
        <UsersList query={query} />
      </Suspense>
    </div>
  );
}
