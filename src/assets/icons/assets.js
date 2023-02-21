import React from "react"

const Svg = ({ children, className, width, height, viewBox, xmls }) => {

    return (
        <svg viewBox={`${viewBox}`} className={`${className}`} width={`${width}`} height={`${height}`} xmls={`${xmls}`}>
            {children}
        </svg >
    );
};
export const Croos = () => {
    return (
        <Svg className="croos" width={"48"} height={"48"} viewBox={"0 0 48 48"} xmls={"http://www.w3.org/2000/svg"}>
            <path opacity="0.3" d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="black" />
            <path d="M32 16L16 32M16 16L32 32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
};
export const BottomArrow = () => {
    return (
        <Svg className="bottom-arrow" width={"10"} height={"10"} viewBox={"0 0 12 12"} xmls={"http://www.w3.org/2000/svg"}>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.00003 0.958252C6.20714 0.958252 6.37503 1.12615 6.37503 1.33325V9.76127L10.4015 5.73483C10.548 5.58839 10.7854 5.58839 10.9319 5.73484C11.0783 5.88129 11.0783 6.11872 10.9319 6.26517L6.26519 10.9318C6.11875 11.0782 5.88131 11.0782 5.73487 10.9318L1.06821 6.26517C0.921763 6.11872 0.921761 5.88128 1.06821 5.73484C1.21465 5.58839 1.45209 5.58839 1.59854 5.73483L5.62503 9.76127V1.33325C5.62503 1.12615 5.79292 0.958252 6.00003 0.958252Z" fill="black" />
        </Svg>
    );
};
export const TopArrow = (props) => {

    return (
        <Svg className={props.class} width={"10"} height={"10"} viewBox={"0 0 12 12"} xmls={"http://www.w3.org/2000/svg"}>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.00003 0.958008C6.09949 0.958008 6.19487 0.997516 6.2652 1.06784L10.9319 5.73451C11.0783 5.88096 11.0783 6.11839 10.9319 6.26484C10.7854 6.41129 10.548 6.41129 10.4015 6.26484L6.37503 2.23834V10.6663C6.37503 10.8734 6.20714 11.0413 6.00003 11.0413C5.79292 11.0413 5.62503 10.8734 5.62503 10.6663V2.23834L1.59854 6.26484C1.45209 6.41129 1.21466 6.41129 1.06821 6.26484C0.921763 6.11839 0.921762 5.88096 1.06821 5.73451L5.73487 1.06784C5.80519 0.997517 5.90057 0.958008 6.00003 0.958008Z" fill="black" />
        </Svg>
    );
};
export const Wallet = () => {

    return (
        <Svg className={"wallet-icon"} width={"26"} height={"24"} viewBox={"0 0 28 24"} xmls={"http://www.w3.org/2000/svg"}>
            <path d="M24.6667 5.33333V2.66667C24.6667 1.196 23.4707 0 22 0H4.66667C2.46133 0 0.666668 1.79467 0.666668 4V20C0.666668 22.9347 3.05867 24 4.66667 24H24.6667C26.1373 24 27.3333 22.804 27.3333 21.3333V8C27.3333 6.52933 26.1373 5.33333 24.6667 5.33333ZM22 17.3333H19.3333V12H22V17.3333ZM4.66667 5.33333C4.32336 5.31798 3.99921 5.17079 3.7617 4.92242C3.5242 4.67406 3.39164 4.34365 3.39164 4C3.39164 3.65635 3.5242 3.32594 3.7617 3.07758C3.99921 2.82921 4.32336 2.68202 4.66667 2.66667H22V5.33333H4.66667Z" fill="white" />
        </Svg>
    );
};
export const RightArrow = () => {

    return (
        <Svg width={"20.17"} height={"20.17"} viewBox={"0 0 22 22"} xmls={"http://www.w3.org/2000/svg"}>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.4697 1.13617C10.7626 0.843279 11.2375 0.843282 11.5304 1.13618L20.8638 10.4697C21.0044 10.6103 21.0834 10.8011 21.0834 11C21.0834 11.1989 21.0044 11.3897 20.8637 11.5303L11.5304 20.8635C11.2375 21.1564 10.7626 21.1564 10.4697 20.8635C10.1768 20.5706 10.1768 20.0957 10.4697 19.8028L18.5227 11.75H1.66675C1.25253 11.75 0.916748 11.4142 0.916748 11C0.916748 10.5858 1.25253 10.25 1.66675 10.25H18.5228L10.4697 2.19683C10.1768 1.90393 10.1768 1.42906 10.4697 1.13617Z" fill="#979C9E" />
        </Svg>
    );
};
export const SwiperLeftButton = () => {

    return (
        <Svg width={"18"} height={"18"} viewBox={"0 0 22 22"} xmls={"http://www.w3.org/2000/svg"}>
            <path d="M20.3333 11H1.66663M1.66663 11L11 20.3332M1.66663 11L11 1.6665" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
};

export const SwiperRightButton = () => {

    return (
        <Svg width={"18"} height={"18"} viewBox={"0 0 22 22"} xmls={"http://www.w3.org/2000/svg"}>
            <path d="M1.66675 11H20.3334M20.3334 11L11.0001 1.6665M20.3334 11L11.0001 20.3332" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </Svg>
    );
};
