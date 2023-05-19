import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main>
      <div>
        <Textarea />
        <Button className='bg-primary text-primary-foreground'>Add</Button>
      </div>
    </main>
  );
}
