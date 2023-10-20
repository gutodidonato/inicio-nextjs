import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      <h1>OOPSS! 404</h1>
      <Image
        src="https://http.cat/images/404.jps"
        alt="404"
        width={500}
        height={500}
      />
    </div>
  );
}
