import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = () => (
    <ContentLoader
        speed={1}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="135" cy="97" r="96"/>
        <rect x="-2" y="200" rx="7" ry="7" width="280" height="22"/>
        <rect x="0" y="242" rx="10" ry="10" width="280" height="63"/>
        <rect x="5" y="327" rx="9" ry="9" width="90" height="30"/>
        <rect x="121" y="319" rx="9" ry="9" width="152" height="45"/>
    </ContentLoader>
)

export default PizzaSkeleton

