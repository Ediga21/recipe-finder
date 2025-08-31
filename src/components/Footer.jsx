export default function Footer() {
  return (
    <footer className="bg-green-700 text-white text-center py-6 mt-10">
      <p className="text-sm mb-2">
        © {new Date().getFullYear()} Ediga&apos;s RecipeFinder. Made with ❤️
      </p>
      <a 
        href="mailto:ediga.recipefinder@gmail.com" 
        className="hover:underline"
      >
        📧 Contact: ediga.recipefinder@gmail.com
      </a>
    </footer>
  );
}
