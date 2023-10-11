import { SignInButton, SignOutButton, useSession } from "@clerk/nextjs";
import Link from "next/link";
import { trpc } from "../../utils/trpc";

export function SideNav() {
  const session = useSession();
  const user = trpc.post.all.useQuery();

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">
            <span className="codicon codicon-add flex items-center gap-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.36 1.37l6.36 5.8-.71.71L13 6.964v6.526l-.5.5h-3l-.5-.5v-3.5H7v3.5l-.5.5h-3l-.5-.5V6.972L2 7.88l-.71-.71 6.35-5.8h.72zM4 6.063v6.927h2v-3.5l.5-.5h3l.5.5v3.5h2V6.057L8 2.43 4 6.063z"
                />
              </svg>
              <span className="hidden text-lg md:inline">Home</span>
            </span>
          </Link>
        </li>

        <li>
          <SignInButton>
            <span className="flex items-center gap-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.02 3.77l.01-.01.99.99V2.5l-.5-.5h-9l-.51.5v.493L2 3v10.29l.36.46 5 1.72L8 15v-1h3.52l.5-.5v-2.25l-1 1V13H8V4.71l-.33-.46L4.036 3h6.984v.77zM7 14.28l-4-1.34V3.72l4 1.34v9.22zm3.09-6.75h4.97v1h-4.93l1.59 1.6-.71.7-2.47-2.46v-.71l2.49-2.48.7.7-1.64 1.65z"
                />
              </svg>

              <span className="hidden text-lg text-green-700 md:inline">
                Log in
              </span>
            </span>
          </SignInButton>
        </li>
        <li>
          <SignOutButton>
            <span className="flex items-center gap-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.02 3.77v1.56l1-.99V2.5l-.5-.5h-9l-.5.5v.486L2 3v10.29l.36.46 5 1.72L8 15v-1h3.52l.5-.5v-1.81l-1-1V13H8V4.71l-.33-.46L4.036 3h6.984v.77zM7 14.28l-4-1.34V3.72l4 1.34v9.22zm6.52-5.8H8.55v-1h4.93l-1.6-1.6.71-.7 2.47 2.46v.71l-2.49 2.48-.7-.7 1.65-1.65z"
                />
              </svg>
              <span className="hidden text-lg text-green-700 md:inline">
                Log out
              </span>
            </span>
          </SignOutButton>
        </li>
      </ul>
    </nav>
  );
}
