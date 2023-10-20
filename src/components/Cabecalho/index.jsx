import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="bg-black h-20 text-purple-500">
      <nav>
        <ul>
          <li>
            <Link href="/">::.HOME</Link>
          </li>
          <li>
            <Link href="/produtos/camisa">::.Camisas</Link>
          </li>
          <li>
            <Link href="/produtos/tenis">::.Tenis</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
