export default function Footer() {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ padding: "40px", textAlign: "center", borderTop: "1px solid #eee" }}>
      © {currentYear} João Galimberti. Todos os direitos reservados.
    </footer>
  );
}
