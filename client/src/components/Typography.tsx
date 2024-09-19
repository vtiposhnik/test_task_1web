import { Link } from "react-router-dom"

interface ITypography {
    children: React.ReactNode
    styles?: string
    path?: string
}

export function Header1({ children, styles = '' }: ITypography) {
    return <h1 className={`${styles} text-[40px] font-[700]`}> {children} </h1>
}

export function Paragraph({ children, styles = '' }: ITypography) {
    return <p className={`${styles} text-[20px] font-[300]`}>{children}</p>
}

export function PinkLinkBtn({ children, styles = '', path }: ITypography) {
    return <Link className={`${styles} bg-[#E4D9FF] text-[24px] font-[700] w-[160px] rounded-[100px] p- text-center`} to={path || '#'}>{children}</Link>
}