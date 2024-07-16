import { useNavigate } from "react-router-dom";
import TransitionEvent from "transition-event";
import AuthModal from "../../Auth/AuthModal";

const { useState } = require("react");


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
    
    export default function Navigation() {
        const [open, setOpen] = useState(false);
        const navigate = useNavigate();

        const [openAuthModal, setOpenAuthModal] = useState(false);
        const [anchorE1, setAnchorE1] = useState(null);
        const openUserMenu = Boolean(anchorE1);
        const jwt = localStorage.getItem("jwt");

        const handleUserClick = (event) => {
            setAnchorE1(event.currentTarget);
        };

        const handleCloseUserMenu = (event) => {
            setAnchorE1(null);
        };

        const handleOpen = () => {
            setOpenAuthModal(true);
        };

        const handleClose = () => {
            setOpenAuthModal(false);
        };

        const handleCategoryClick = (category, section, item, close) => {
            navigate(`/${category.id}/${section.id}/${item.id}`);
            close();
        };

        return (
            <div className="bg-white pb-10">
                {/* Mobile Menu */}
                <TransitionEvent.Root show={open} as={Fragment}>

                </TransitionEvent.Root>

                <header className="relative bg-white">
                    <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium">
                        Get free delivery on orders over $100
                    </p>

                    <nav aria-label="Top" className="max-auto">
                        <div className="border-b border-gray-200">
                            <div className="flex h-16 items-center px-11">
                                <button
                                type="button"
                                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}>
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>

                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
                <AuthModal handleClose={handleClose} open={openAuthModal}/>
            </div>
        )




    }