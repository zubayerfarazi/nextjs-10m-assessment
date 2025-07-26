const Footer = () =>{
  return (
    <footer className="text-center text-sm text-gray-500 py-6 border-t mt-12">
      <p>© {new Date().getFullYear()} 10 Minute School – Assessment Task</p>
      <p>
        <span>Developed by </span>
        <a
          href="https://zrfportfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block hover:underline text-blue-500"
        >
          Zubayer Farazi
        </a>
      </p>
    </footer>
  );
}

export default Footer;