import globe from './globe.png'

export default function Header(){
    return (
        <header>
            <img src={globe} height="40px" />
            <h1>My travel journal</h1>
        </header>
    )
}
