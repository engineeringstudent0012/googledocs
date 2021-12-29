import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import {signOut, useSession} from "next-auth/client"

function Header() {

    const [session]=useSession()

    return (
        <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">

            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className=" h-20 w-20 border-0"
            >
                <Icon name="menu" size="2xl"/>
            </Button>

            {/*Docs Written Here*/}

            <Icon name="description" size="3xl" color="blue"/>
            <h1 className="ml-2 text-gray-700 bold text-2xl"> Docs</h1>

            {/*Search Box*/}

            <div
                className="mx-5 md:mx-20 flex flex-grow items-center px-1 py-1 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md f">
                <Icon name="search" size="3xl" color="gray"/>
                <input type="text" placeholder="Search"
                       className=" flex-grow px-2 py-2 text-base bg-transparent outline-none"/>
            </div>

            {/*For The 9 Dots Ico*/}
            <Button
                color="gray-"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="ml-5 md:ml-20 h-20 w-20 border-0"
            >
                <Icon name="apps" size="2xl"/>
            </Button>

            {/*For The Image*/}
            <img
                onClick={signOut}
                loading="lazy"
                className=" cursor-pointer h-12 w-12 rounded-full ml-2"
                src={session?.user?.image}
                alt="#"
            />
        </header>
    )
}

export default Header
