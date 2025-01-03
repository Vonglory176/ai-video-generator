import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {

  // const { user } = useUser();

  return (
    <div className="">
      <h2>Hello World</h2>
      <Button>Click me</Button>
      <UserButton />
    </div>
  );
}
