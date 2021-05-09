import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Language() {
  const history = useRouter();

  return (
    <div>
      <h1>Mudar Idioma</h1>

      <ul>
        {history.locales.map((local) => (
          <li key={local}>
            <Link href={history.asPath} locale={local}>
              {local}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
