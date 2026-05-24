type EquationProps = {
  children: string;
  block?: boolean;
};

// TODO: Replace this lightweight renderer with KaTeX or MathJax if MDX/remark
// math support is added to the article pipeline.
export default function Equation({ children, block = false }: EquationProps) {
  const className = block ? 'equation equation-block' : 'equation';

  return block ? (
    <div className={className}>{children}</div>
  ) : (
    <span className={className}>{children}</span>
  );
}
