import ShortenForm from "@/components/shorten-form";
import UrlList from "@/components/url-list";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl py-12 md:py-24 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">URL Shortener</h1>
        <p className="md:text-lg">Shorten your URL and share them easily</p>
        <div className="text-left">
          <ShortenForm />
          <UrlList />
        </div>
      </div>
    </main>
  );
}
