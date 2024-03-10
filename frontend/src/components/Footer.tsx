const Footer=()=>{
    return(
        <div className="bg-brown py-10">
            <div className="container mx-auto flex justify-between items-center">
                <span className ="text-3xl text-golden font-bold tracking-tight">
                    QuickStay.com
                </span>
                <span className="text-lightBrown font-bold tracking-tight flex gap-4">
                    <p className="cursor-pointer">Privacy Policy</p>
                    <p className="cursor-pointer">Terms of Service</p>
                </span>
            </div>
        </div>
    );
};

export default Footer;