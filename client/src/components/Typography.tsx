import { Link } from "react-router-dom"
import { default_btn_hover } from "./util"

interface ITypography {
    children: React.ReactNode
    styles?: string
    path?: string
}

export function Header1({ children, styles = '' }: ITypography) {
    return <h1 className={`${styles} text-[24px] md:text-[40px] font-[700]`}> {children} </h1>
}

export function Paragraph({ children, styles = '' }: ITypography) {
    return <p className={`text-[20px] font-[300] ${styles} `}>{children}</p>
}

export function PinkLinkBtn({ children, styles = '', path }: ITypography) {
    return <Link className={`${styles} bg-[#E4D9FF] text-[24px] font-[700] w-[180px] rounded-[100px] text-center ${default_btn_hover}`} to={path || '#'}>{children}</Link>
}

export const TruncateText = ({ text, maxLength }: { text: string, maxLength: number }) => {
    if (text.length < maxLength) return <span>{text}</span>

    return (
        <span>
            {text.slice(0, maxLength)}...
        </span>
    )
}