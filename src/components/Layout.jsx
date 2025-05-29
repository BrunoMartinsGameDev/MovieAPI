function Layout({ children }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🎬 Catálogo de Filmes</h1>
      {children}
    </div>
  );
}

export default Layout;