import { ReactNode, MouseEventHandler } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  href?: string
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({ children, onClick, href, className = '', type = 'button' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-700 hover:to-accent-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group'

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`}>
        {buttonContent}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {buttonContent}
    </button>
  )
}

