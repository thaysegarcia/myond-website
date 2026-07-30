function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 border-t border-gray-200 text-sm text-gray-500 text-center">
      <p>© {anoAtual} Myond. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
