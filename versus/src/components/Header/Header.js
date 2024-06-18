import './Header.css'
import HeaderButton from './HeaderButton/HeaderButton'
import HedaerInfo from './HeaderInfo/HeaderInfo'
import HeaderNav from './HeaderNav/HeaderNav'
const Header = () => {
    return (
        <div className='HeaderWrapper'>
            <HeaderNav/>
            <div className='Centerdiv'>
                <HedaerInfo />
                <HeaderButton />
            </div>
        </div>
    )
}

export default Header