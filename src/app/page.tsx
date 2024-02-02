import { validateMessage } from "@/lib/farcaster";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main className="p-8">
      <h1 className="text-xl font-bold">Event Unlock Frame</h1>
      <p className="mt-2">
        <Link
          target="_blank"
          className="underline"
          href="https://warpcast.notion.site/Farcaster-Frames-4bd47fe97dc74a42a48d3a234636d8c5"
        >
          Frames
        </Link>{" "}
        are an interation on top of{" "}
        <Link target="_blank" className="underline" href="https://ogp.me/">
          OpenGraph
        </Link>
        .
      </p>
      <p className="mt-2">
        At{" "}
        <Link
          target="_blank"
          className="underline"
          href="https://unlock-protocol.com/"
        >
          Unlock
        </Link>{" "}
        we built a protocol for membership. You can now{" "}
        <em>share events</em> so that people can register 
        in frames!
      </p>
      <p className="mt-2">
        <Link
          target="_blank"
          className="underline"
          href="https://warpcast.com/julien51.eth/0xa5390f5a"
        >
          TGF Demo
        </Link>{" "}
        |{" "}
        <Link
          target="_blank"
          className="underline"
          href="https://github.com/unlock-protocol/token-gated-frame"
        >
          Based on Token Gated Frame
        </Link>
      </p>
    </main>
  );
}
