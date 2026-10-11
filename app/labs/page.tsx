import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h3>Kavina Mansukhani</h3>
      <a
        id="wd-github"
        href="https://github.com/Kavinaaa/webdev-client"
        target="_blank"
      >
        GitHub Repository
      </a>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2 - Cascading Style Sheets</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            {" "}
            Lab 4: Client state
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
    </div>
  );
}
