import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex md:items-center sticky justify-between p-4 z-10">
      <Skeleton className="mb-4 md:mb-0">
        <a href="/" className="text-lg font-medium text-black">
          Your Logo
        </a>
      </Skeleton>

      <Skeleton className="md:hidden"></Skeleton>

      <nav className="hidden md:flex space-x-4"></nav>
      <div className="hidden md:flex space-x-4"></div>
    </div>
  );
}
