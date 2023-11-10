function Text({ children, size = "1rem", className = "", mb = 0 }) {
  return (
    <p style={{ fontSize: size, marginBottom: mb }} className={className}>
      {children}
    </p>
  );
}

export default Text;
